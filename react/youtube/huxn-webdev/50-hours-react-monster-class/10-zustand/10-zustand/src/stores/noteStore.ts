import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface INote {
  id: string;
  title: string;
  content: string;
}

interface INoteStore {
  notes: INote[];
  addNote: (note: INote) => void;
  updateNote: (id: string, updatedNote: Partial<INote>) => void;
  removeNote: (id: string) => void;
}

const useNoteStore = create<INoteStore>()(
  persist(
    (set) => ({
      notes: [],

      addNote: (note) =>
        set((state) => ({
          notes: [...state.notes, note],
        })),

      updateNote: (id, updatedNote) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, ...updatedNote } : note
          ),
        })),

      removeNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    { name: 'note-storage' }
  )
);

export default useNoteStore;
