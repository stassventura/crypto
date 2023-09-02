import mongoose from 'mongoose';

const emailVerificationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
});

export default mongoose.models.EmailVerification || mongoose.model('EmailVerification', emailVerificationSchema);
