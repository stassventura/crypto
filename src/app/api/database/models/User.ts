import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String, // Используйте String, а не Boolean для хранения пароля
        required: true
    },
    role:{
        type: String,
        default: "user",
        required: true  
    },
    balance: {
        type: Object,
        default: {}
    }
});

export default mongoose.models.User || mongoose.model('User', userSchema);
