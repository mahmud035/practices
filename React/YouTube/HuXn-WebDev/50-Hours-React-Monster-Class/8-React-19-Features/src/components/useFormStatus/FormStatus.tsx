import FormButton from './FormButton';

export default function FormStatus() {
  const formAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newPost = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    console.table(newPost);
  };

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="border-2"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="border-2"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <FormButton />
    </form>
  );
}
