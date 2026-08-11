import mongoose from 'mongoose';

const paitentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        digonseWith: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        bloodGrp: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ['M', 'F', 'O'],
            required: true,
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Hospital',
        },
    },
    { timestamps: true }
);

export const Paitent = mongoose.model('Paitent', paitentSchema);
