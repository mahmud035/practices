import { useState } from 'react';
import { useMe, useLogout } from '../features/auth/hooks/useAuth';
import NoteList from '../features/notes/components/NoteList';
import NoteForm from '../features/notes/components/NoteForm';
import { Note } from '../features/notes/types/note.types';

interface NoteModalProps {
  note?: Note;
  onClose: () => void;
}

function NoteModal({ note, onClose }: NoteModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">
          {note ? 'Edit note' : 'New note'}
        </h2>
        <NoteForm note={note} onClose={onClose} />
      </div>
    </div>
  );
}

export default function NotesPage() {
  const { data: user } = useMe();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | undefined>(undefined);

  const openCreate = () => {
    setEditingNote(undefined);
    setIsFormOpen(true);
  };

  const openEdit = (note: Note) => {
    setEditingNote(note);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingNote(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">My Notes</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{user?.name}</span>
          <button
            onClick={() => logout()}
            disabled={isLoggingOut}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            {isLoggingOut ? 'Signing out…' : 'Sign out'}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-medium text-gray-500">All notes</h2>
          <button
            onClick={openCreate}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            <span aria-hidden>+</span> New note
          </button>
        </div>

        <NoteList onEdit={openEdit} />
      </main>

      {isFormOpen && <NoteModal note={editingNote} onClose={closeForm} />}
    </div>
  );
}
