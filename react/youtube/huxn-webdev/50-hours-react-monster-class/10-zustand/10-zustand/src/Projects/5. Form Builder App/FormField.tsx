import { IFormField } from '../../stores/formStore';

interface IFormFieldProps {
  field: IFormField;
  onUpdate: (id: string, updatedField: IFormField) => void;
  onRemove: (id: string) => void;
}

export default function FormField({
  field,
  onUpdate,
  onRemove,
}: IFormFieldProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onUpdate(field.id, { ...field, [name]: value });
  };

  if (field.type === 'textarea') {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <label className="block mb-2 font-medium">
          {field.label}
          <textarea
            value={field.value}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </label>
        <button
          type="button"
          onClick={() => onRemove(field.id)}
          className="w-full p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Remove
        </button>
      </div>
    );
  }

  if (field.type === 'file') {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <label className="block mb-2 font-medium">
          {field.label}
          <input
            type="file"
            onChange={(e) =>
              onUpdate(field.id, {
                ...field,
                value: e.target.files
                  ? Array.from(e.target.files)
                      .map((file) => file.name)
                      .join(', ')
                  : '',
              })
            }
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </label>
        <button
          type="button"
          onClick={() => onRemove(field.id)}
          className="w-full p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <label className="block mb-2 font-medium">
        {field.label}
        <input
          type={field.type}
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        />
      </label>
      <button
        type="button"
        onClick={() => onRemove(field.id)}
        className="w-full p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
      >
        Remove
      </button>
    </div>
  );
}
