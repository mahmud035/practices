import { Response } from 'express';
import { AuthRequest } from '../../middlewares/authenticate';
import { notesService } from './notes.service';

/**
 * Returns all notes for the authenticated user.
 */
const getAll = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const notes = await notesService.getAll(req.user!._id);
    res.json({ statusCode: 200, success: true, message: 'Notes fetched', data: notes });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch notes';
    res.status(500).json({ statusCode: 500, success: false, message, data: null });
  }
};

/**
 * Returns a single note by id for the authenticated user.
 */
const getOne = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const note = await notesService.getOne(req.params.id, req.user!._id);
    if (!note) {
      res.status(404).json({ statusCode: 404, success: false, message: 'Note not found', data: null });
      return;
    }
    res.json({ statusCode: 200, success: true, message: 'Note fetched', data: note });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch note';
    res.status(500).json({ statusCode: 500, success: false, message, data: null });
  }
};

/**
 * Creates a new note for the authenticated user.
 */
const create = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, body } = req.body as { title: string; body: string };
    const note = await notesService.create(req.user!._id, title, body);
    res.status(201).json({ statusCode: 201, success: true, message: 'Note created', data: note });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create note';
    res.status(500).json({ statusCode: 500, success: false, message, data: null });
  }
};

/**
 * Updates an existing note owned by the authenticated user.
 */
const update = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const note = await notesService.update(req.params.id, req.user!._id, req.body as { title?: string; body?: string });
    if (!note) {
      res.status(404).json({ statusCode: 404, success: false, message: 'Note not found', data: null });
      return;
    }
    res.json({ statusCode: 200, success: true, message: 'Note updated', data: note });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update note';
    res.status(500).json({ statusCode: 500, success: false, message, data: null });
  }
};

/**
 * Deletes a note owned by the authenticated user.
 */
const remove = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const note = await notesService.remove(req.params.id, req.user!._id);
    if (!note) {
      res.status(404).json({ statusCode: 404, success: false, message: 'Note not found', data: null });
      return;
    }
    res.json({ statusCode: 200, success: true, message: 'Note deleted', data: note });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to delete note';
    res.status(500).json({ statusCode: 500, success: false, message, data: null });
  }
};

export const notesController = { getAll, getOne, create, update, remove };
