import mongoose from 'mongoose'

const cryptocurrencySchema = new mongoose.Schema({
    asset: {
      type: String,
      unique: true,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    display: {
      type: Boolean,
      unique: true,
      default: true,
    }
  });



export default mongoose.models.Cryptocurrency || mongoose.model('Cryptocurrency', cryptocurrencySchema)
