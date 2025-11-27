import mongoose, { model, Schema } from "mongoose";


const dataSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
    },

    categories: [
        {
            type: String,
            required: true,
        },
    ],

    brand: {
        type: String,
        default: "No Brand"
    },

    price: {
        type: Number,
        required: true,
    },

    discountPrice: {
        type: Number, // final price after discount
    },

    images: [
        {
            type: String,
            required: true,
        },
    ],

    stock: {
        type: Number,
        default: 0,
    },

    seller: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        shopName: {
            type: String,
            required: true
        },
    },

    variations: [
        {
            type: {
                type: String, // e.g. "Color", "Size"
            },
            options: [String], // e.g ["Red", "Black"]
        },
    ],

    ratings: {
        average: {
            type: Number,
            default: 0,
        },
        totalReviews: {
            type: Number,
            default: 0,
        },
    },

    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            rating: Number,
            comment: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],

    isFeatured: {
        type: Boolean,
        default: false,
    },

    status: {
        type: String,
        enum: ["active", "inactive", "pending", "rejected"],
        default: "active",
    },
},
    { timestamps: true }
);

export default mongoose.model('Product', dataSchema)