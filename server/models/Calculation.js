import mongoose from 'mongoose';

const calculationSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // Added to link data to the user
  location: String,
  bill: Number,
  rooftop: Number,
  budget: Number,
  aiResponse: String, // Fixed typo from 'airResponse'
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Calculation', calculationSchema);
