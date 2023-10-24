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
        type: Types.ObjectId,
        ref: "user",
        required: [true, 'announcement creator is required']
    }
});

export const Announcement = mongoose.model("announcement", announcementSchema);