import express from 'express';
import { createAnnouncement, deleteAnnouncement, getAllAnnouncements, getAnnouncement, updateAnnouncement } from './announcement.controller.js';
import { isValid } from '../../middleware/validation.js';
import { createAnnouncementSchema, idSchema, updateAnnouncementSchema } from './announcement.validation.js';

const announcementRouter = express.Router();


announcementRouter.route("/")
    .get(getAllAnnouncements)
    .post(isValid(createAnnouncementSchema), createAnnouncement);

announcementRouter.route("/:id")
    .get(getAnnouncement)
    .patch(isValid(updateAnnouncementSchema), updateAnnouncement)
    .delete(isValid(idSchema), deleteAnnouncement);



export default announcementRouter;