import joi from 'joi';
import { isValidObjectId } from './../../middleware/validation.js';

export const createAnnouncementSchema = joi.object({
    title: joi.string().required(),
    announcement: joi.string().required(),
    createdBy: joi.string(),
}).required();

export const updateAnnouncementSchema = joi.object({
    id: joi.string().custom(isValidObjectId),
    title: joi.string(),
    announcement: joi.string(),
    createdBy: joi.string(),
}).required();

export const idSchema = joi.object({
    id: joi.string().custom(isValidObjectId),
}).required();
