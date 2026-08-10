import mongoose from 'mongoose';

orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    quantity: {
        type: Number,
        required: true,
    },
});
const oderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        orderItems: {
            type: [orderItemSchema],
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
            default: 'PENDING',
        },
    },
    { timestamps: true }
);

export const Order = mongoose.model('Order', oderSchema);
