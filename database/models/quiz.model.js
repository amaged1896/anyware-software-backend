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
}, {
    toJSON: {
        transform: function (doc, ret) {
            // Modify the serialization of the 'dueTo' field
            ret.dueTo = ret.dueTo.toISOString().split('T')[0];
        }
    }
});

export const Quiz = mongoose.model("quiz", quizSchema);