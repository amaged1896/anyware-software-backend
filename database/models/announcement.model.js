import mongoose, { Types } from "mongoose";

const announcementSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'add announcement title please'],
    },
    announcement: {
        type: String,
        required: [true, 'announcement is required']
    },
    createdBy: {
        type: String,
        required: [true, 'announcement creator is required']
    }
}, { timestamps: true });

export const Announcement = mongoose.model("announcement", announcementSchema);