// Event handler types
type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
type SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

export default function JobForm() {
  const handleSubmit: SubmitHandler = (e) => {
    e.preventDefault();
    // TypeScript knows e.currentTarget is HTMLFormElement
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  };

  const handleChange: ChangeHandler = (e) => {
    // TypeScript knows e.target is HTMLInputElement
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  );
}
