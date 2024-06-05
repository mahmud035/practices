import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import { Suspense } from 'react';

// dynamic metadata
export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
};

const SinglePost = async ({ params }) => {
  const { id } = params;
  // const post = await getPost(id);
  // const comments = await getPostComments(id);

  // Progressive Rendering
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-2xl">Title: {post.title}</h2>
      <p className="mt-4">Description: {post.body}</p>
      <hr />

      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default SinglePost;

export const generateStaticParams = async () => {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
};

// [
//   {id: '1'}
//   {id: '2'}
//   {id: '3'}
// ]
