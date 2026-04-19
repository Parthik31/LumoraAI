import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Import Models
import Calculation from './models/Calculation.js';
import Tip from './models/Tip.js';
import User from './models/User.js';

dotenv.config();
const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'https://lumorasolarai.netlify.app'], // Add your Netlify URL here once you have it
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Crucial for cookies/tokens if you add them later
};
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Configure Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ==========================================
// AUTHENTICATION ROUTES
// ==========================================

// Sign Up Route
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "Email is already registered" });

        const newUser = new User({ name, email, password });
        await newUser.save();
        
        res.status(201).json({ message: "User created successfully", email: newUser.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        
        res.status(200).json({ message: "Login successful", email: user.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// AI GENERATION & DATA SAVING ROUTE
// ==========================================

app.post('/generate', async (req, res) => {
    try {
        // We now expect 'userEmail' from the frontend to link the data
        const { prompt, formData, type, userEmail } = req.body;
        
        if (!prompt) return res.status(400).json({ error: "No prompt provided" });

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // 1. Save to Database if it's a Calculator request
        if (type === 'calculator' && formData) {
            const newCalc = new Calculation({
                userEmail: userEmail || 'unknown@guest.com',
                ...formData,
                aiResponse: responseText
            });
            await newCalc.save();
        }

        // 2. Save to Database if it's a Tips request
        if (type === 'tips' && formData) {
            const newTip = new Tip({
                userEmail: userEmail || 'unknown@guest.com',
                ...formData,
                aiResponse: responseText
            });
            await newTip.save();
        }

        res.json({ result: responseText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate AI response or save to database." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
