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
            // Optionally, you can delete the '_id' and '__v' fields if you don't want them in the response
            delete ret._id;
            delete ret.__v;
        }
    }
});

export const Quiz = mongoose.model("quiz", quizSchema);