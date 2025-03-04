import { useState } from 'react';
import useNoteStore, { INote } from '../../stores/noteStore';

const defaultFormData = {
  id: '',
  title: '',
  content: '',
};

export default function NoteApp() {
  const { notes, addNote, updateNote, removeNote } = useNoteStore();
  const [formData, setFormData] = useState<INote>(defaultFormData);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Create or Update Note
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.title.trim() === '' || formData.content.trim() === '') return;

    if (editingId) {
      updateNote(formData.id, {
        title: formData.title,
        content: formData.content,
      });
    } else {
      addNote({
        id: crypto.randomUUID(),
        title: formData.title,
        content: formData.content,
      });
    }

    setFormData(defaultFormData);
    setEditingId(null);
  };

  // Edit Note
  const handleEditNote = (note: INote) => {
    setEditingId(note.id);
    setFormData(note);
  };

  // Delete Note
  const handleRemoveNote = (id: string) => {
    removeNote(id);
  };

  // Cancel Note
  const handleCancelNote = () => {
    setEditingId(null);
    setFormData(defaultFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Note Taking App
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Note Title"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Note Content"
            className="w-full h-32 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-between">
            {editingId ? (
              <>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Update Note
                </button>
                <button
                  onClick={handleCancelNote}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Note
              </button>
            )}
          </div>
        </form>

        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {note.title}
              </h2>
              <p className="text-gray-600 mb-4">{note.content}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditNote(note)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveNote(note.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
