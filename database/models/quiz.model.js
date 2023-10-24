import mongoose from 'mongoose';

const quizSchema = mongoose.Schema({
    course: {
        type: String,
        required: [true, "Course is required"],
    },
    topic: {
        type: String,
        required: [true, "Topic is required"]
    },
    dueTo: {
        type: Date,
        required: [true, "Date is required"],
    }
});

export const Quiz = mongoose.model("quiz", quizSchema);