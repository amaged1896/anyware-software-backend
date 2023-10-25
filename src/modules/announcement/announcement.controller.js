import { Announcement } from "../../../database/models/announcement.model.js";
import { AppError } from "../../utils/appError.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const getAllAnnouncements = catchAsync(async (req, res, next) => {
    const announcement = await Announcement.find();
    return res.status(200).json({ status: "success", results: announcement.length, data: announcement });
});

export const createAnnouncement = catchAsync(async (req, res, next) => {
    const isExist = await Announcement.findOne({ announcement: req.body.announcement });
    if (isExist) return next(new AppError("announcement is already exist", 400));

    const announcement = await Announcement.create({
        title: req.body.title,
        announcement: req.body.announcement,
        createdBy: req.body.createdBy
    });
    return res.status(200).json({ status: "success", message: "announcement has been created successfully!", data: announcement });
});

export const getAnnouncement = catchAsync(async (req, res, next) => {
    const announcement = await Announcement.findOne({ _id: req.params.id });
    if (!announcement) return next(new AppError("announcement is not exist", 400));

    return res.status(200).json({ status: "success", message: "announcement has been created successfully!", data: announcement });
});

export const updateAnnouncement = catchAsync(async (req, res, next) => {
    const announcement = await Announcement.findOne({ _id: req.params.id });
    if (!announcement) return next(new AppError("announcement is not exist", 400));

    announcement.title = req.body.title;
    announcement.announcement = req.body.announcement;
    announcement.createdBy = req.body.createdBy;
    await announcement.save();

    return res.status(200).json({ status: "success", message: "announcement has been created successfully!", data: announcement });
});

export const deleteAnnouncement = catchAsync(async (req, res, next) => {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    if (!announcement) return next(new AppError("announcement is already exist", 400));

    return res.status(200).json({ status: "success", message: "announcement has been deleted successfully!" });
});