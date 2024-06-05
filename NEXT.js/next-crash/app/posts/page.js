import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

export const metadata = {
  title: 'Posts',
};

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <div className="mt-6">
      <h1>All Posts</h1>
      <hr />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
