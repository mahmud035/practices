import { useState } from 'react';

interface JobFormData {
  title: string;
  company: string;
  salary: number;
  location: {
    city: string;
    country: string;
  };
  isRemote: boolean;
}

export default function JobForm() {
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    company: '',
    salary: 0,
    location: { city: '', country: '' },
    isRemote: false,
  });

  // Type-safe field updater
  const handleChange = <K extends keyof JobFormData>(
    field: K,
    value: JobFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form>
      <input
        value={formData.title}
        onChange={(e) => handleChange('title', e.target.value)} // ✅
      />

      <input
        value={formData.company}
        onChange={(e) => handleChange('company', e.target.value)} // ✅
      />

      <input
        type="number"
        value={formData.salary}
        onChange={(e) => handleChange('salary', Number(e.target.value))} // ✅
      />

      <input
        type="checkbox"
        checked={formData.isRemote}
        onChange={(e) => handleChange('isRemote', e.target.checked)} // ✅
      />

      {/* ❌ TypeScript prevents errors */}
      {/* handleChange("invalid", "value") // Error */}
      {/* handleChange("salary", "85000") // Error: string not assignable to number */}
    </form>
  );
}
