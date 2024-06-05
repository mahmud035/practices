const getPostComments = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!result.ok) {
    throw new Error('There was an error fetching post comment');
  }

  return result.json();
};

export default getPostComments;
