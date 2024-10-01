import { Suspense, use } from 'react';

const fetchData = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return res.json();
};

const JokeItem = () => {
  const joke = use(fetchData());

  return (
    <div className="p-4 my-6 rounded-lg shadow-md bg-blue-50">
      <h2 className="text-xl font-bold">{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <Suspense
      fallback={
        <h2 className="mt-5 text-2xl font-bold text-center">Loading...</h2>
      }
    >
      <title>Chunk Norris Jokes</title>
      <meta name="description" content="Chunk Norris Jokes" />
      <meta name="keywords" content="chunk norris, jokes" />

      <JokeItem />
    </Suspense>
  );
};

export { Joke as UseExample1 };
