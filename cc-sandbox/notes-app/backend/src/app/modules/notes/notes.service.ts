import { Types } from 'mongoose';
import { NoteModel } from './notes.model';

/**
 * Returns all notes belonging to the given user.
 */
const getAll = async (userId: string) => {
  return NoteModel.find({ userId: new Types.ObjectId(userId) }).sort({ createdAt: -1 });
};

/**
 * Returns a single note by id, scoped to the user. Returns null if not found or not owned.
 */
const getOne = async (id: string, userId: string) => {
  return NoteModel.findOne({ _id: id, userId: new Types.ObjectId(userId) });
};

/**
 * Creates a new note for the given user.
 */
const create = async (userId: string, title: string, body: string) => {
  return NoteModel.create({ userId: new Types.ObjectId(userId), title, body });
};

/**
 * Updates title and/or body of a note owned by the user. Returns null if not found or not owned.
 */
const update = async (id: string, userId: string, payload: { title?: string; body?: string }) => {
  return NoteModel.findOneAndUpdate(
    { _id: id, userId: new Types.ObjectId(userId) },
    { $set: payload },
    { new: true }
  );
};

/**
 * Deletes a note owned by the user. Returns null if not found or not owned.
 */
const remove = async (id: string, userId: string) => {
  return NoteModel.findOneAndDelete({ _id: id, userId: new Types.ObjectId(userId) });
};

export const notesService = { getAll, getOne, create, update, remove };
