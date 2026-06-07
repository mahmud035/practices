import { Schema, model } from 'mongoose';
import { INote } from './notes.interface';

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const NoteModel = model<INote>('Note', noteSchema);
