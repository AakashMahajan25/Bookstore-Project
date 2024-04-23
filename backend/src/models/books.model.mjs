import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    
    author: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
    
}, {timestamps: true});

export default mongoose.model('details', booksSchema);