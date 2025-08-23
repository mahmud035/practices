import { useState } from 'react';
import useFormStore from '../../stores/formStore';
import FormField from './FormField';

interface INewField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'password' | 'textarea' | 'file' | 'date';
  value: string;
}

const defaultNewField: INewField = {
  id: '',
  label: '',
  type: 'text',
  value: '',
};

export default function FormBuilder() {
  const { formFields, addField, updateField, removeField, resetForm } =
    useFormStore();
  const [newField, setNewField] = useState<INewField>(defaultNewField);

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  // Add Field
  const handleAddField = () => {
    addField({ ...newField, id: crypto.randomUUID() });
    setNewField(defaultNewField);
  };

  // Update Field
  const handleUpdateField = (id: string, updatedField: INewField) => {
    updateField(id, updatedField);
  };

  // Remove Field
  const handleRemoveField = (id: string) => {
    removeField(id);
  };

  // Reset Form
  const handleResetForm = () => {
    resetForm();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Form Builder</h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
        <input
          type="text"
          name="label"
          placeholder="Field Label"
          value={newField.label}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <select
          name="type"
          value={newField.type}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
          <option value="textarea">Textarea</option>
          <option value="date">Date</option>
          <option value="file">File</option>
        </select>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleAddField}
            className="flex-1 p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
          >
            Add Field
          </button>
          <button
            type="button"
            onClick={handleResetForm}
            className="flex-1 p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Reset Form
          </button>
        </div>
      </div>

      <form className="space-y-4">
        {formFields.map((field) => (
          <FormField
            key={field.id}
            field={field}
            onUpdate={handleUpdateField}
            onRemove={handleRemoveField}
          />
        ))}
      </form>
    </div>
  );
}
