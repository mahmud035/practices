import { useActionState } from 'react';

const increment = async (previousState: number, formData: FormData) => {
  console.log(formData.get('name'));
  return previousState + 1;
};

export default function Count() {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form>
      <h1 className="text-3xl">{state}</h1>

      <button className="bg-teal-300 p-2" formAction={formAction}>
        Increment
      </button>
      <br />
      <input
        type="text"
        name="name"
        className="border-2"
        placeholder="Please enter your name"
      />
    </form>
  );
}
