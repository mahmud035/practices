import { NextFunction, Request, Response } from 'express';
import { mediaService } from './media.service';

/**
 * POST /api/media/upload
 * Accepts a single "image" field from multipart/form-data.
 */
const uploadMedia = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ statusCode: 400, success: false, message: 'No file provided', data: null });
      return;
    }
    const media = await mediaService.uploadMedia(req.file);
    res.status(201).json({ statusCode: 201, success: true, message: 'Image uploaded successfully', data: media });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/media
 * Returns all media documents sorted newest first.
 */
const getAllMedia = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const media = await mediaService.getAllMedia();
    res.status(200).json({ statusCode: 200, success: true, message: 'Media fetched successfully', data: media });
  } catch (err) {
    next(err);
  }
};

/**
 * DELETE /api/media/:id
 * Removes the asset from Cloudinary then deletes the MongoDB document.
 */
const deleteMedia = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await mediaService.deleteMedia(req.params.id as string);
    res.status(200).json({ statusCode: 200, success: true, message: 'Media deleted successfully', data: null });
  } catch (err) {
    next(err);
  }
};

export const mediaController = { uploadMedia, getAllMedia, deleteMedia };
