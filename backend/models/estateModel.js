
import mongoose from "mongoose"; 
const Schema = mongoose.Schema;

const estateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    saleOrRent: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    numReviews: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Estate = mongoose.model('Estate', estateSchema);


export default Estate;