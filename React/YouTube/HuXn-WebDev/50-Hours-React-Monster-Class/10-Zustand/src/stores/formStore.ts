import { create } from 'zustand';

// Define the type for the form field
export interface IFormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
  value: string;
}

// Define the shape of the store state
interface IFormStoreState {
  formFields: IFormField[];
  addField: (field: IFormField) => void;
  updateField: (id: string, updateField: IFormField) => void;
  removeField: (id: string) => void;
  resetForm: () => void;
}

// Create the Zustand store with TypeScript
const useFormStore = create<IFormStoreState>()((set) => ({
  formFields: [],

  addField: (field) =>
    set((state) => ({
      formFields: [...state.formFields, field],
    })),

  updateField: (id, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field) =>
        field.id === id ? updatedField : field
      ),
    })),

  removeField: (id) =>
    set((state) => ({
      formFields: state.formFields.filter((field) => field.id !== id),
    })),

  resetForm: () => set({ formFields: [] }),
}));

export default useFormStore;
