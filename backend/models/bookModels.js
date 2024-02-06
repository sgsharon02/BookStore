import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            rquired: true,
        },
        author: {
            type: String,
            rquired: true,
        },
        publishYear: {
            type: String,
            rquired: true,
        },
        review: {
            type: String,
            rquired: true,
        },
    },
    {
        timestamps:true,
    }

);
export const Book = mongoose.model('Book',bookSchema);
