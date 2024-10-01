import { useState } from 'react';
import { useFormStatus } from 'react-dom';

// PostItem component
const PostItem = ({ post }) => {
  return (
    <div className="p-4 my-6 rounded-lg shadow-md bg-blue-50">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

// SubmitButton component
const SubmitButton = () => {
  // IMPORTANT: call useFormStatus() from inside a component that is located inside <form>.
  const { pending } = useFormStatus();
  console.log({ pending });

  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

// PostForm component
const PostForm = ({ addPost }) => {
  const formAction = async (formData) => {
    // Simulate a delay of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // We have direct access to the form data
    const newPost = {
      title: formData.get('title'),
      body: formData.get('body'),
    };

    addPost(newPost);
  };

  return (
    <form
      action={formAction}
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
    >
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter title"
          name="title"
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="body"
        >
          Body
        </label>
        <textarea
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="body"
          rows="5"
          placeholder="Enter body"
          name="body"
        ></textarea>
      </div>

      <div className="flex items-center justify-between">
        {/* NOTE: render <SubmitButton/> inside <form/> */}
        <SubmitButton />
      </div>
    </form>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <>
      <PostForm addPost={addPost} />
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </>
  );
};
export { Posts as UseFormStatusExample };
