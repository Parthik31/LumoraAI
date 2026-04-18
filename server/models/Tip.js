import mongoose from 'mongoose';

const tipSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // To link the tip to the logged-in user
  systemSize: Number,
  locationTips: String,
  usagePattern: String,
  aiResponse: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Tip', tipSchema);
