import express from 'express';
import { createAnnouncement, deleteAnnouncement, getAllAnnouncements, getAnnouncement, updateAnnouncement } from './announcement.controller.js';

const announcementRouter = express.Router();


announcementRouter.route("/")
    .get(getAllAnnouncements)
    .post(createAnnouncement);

announcementRouter.route("/:id")
    .get(getAnnouncement)
    .patch(updateAnnouncement)
    .delete(deleteAnnouncement);



export default announcementRouter;