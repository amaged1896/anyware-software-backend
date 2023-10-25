import joi from 'joi';
import { isValidObjectId } from './../../middleware/validation.js';

export const createQuizSchema = joi.object({
    course: joi.string().required(),
    topic: joi.string().required(),
    dueTo: joi.date().iso().required(),
}).required();

export const updateQuizSchema = joi.object({
    id: joi.string().custom(isValidObjectId),
    course: joi.string(),
    topic: joi.string(),
    dueTo: joi.date().iso(),
}).required();