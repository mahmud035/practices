import { CSSProperties } from 'react';
import useFetch from '../../hooks/useFetch';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postCardStyle: CSSProperties = {
  color: 'white',
  backgroundColor: 'teal',
  padding: '1rem',
  margin: '1rem',
  borderRadius: '0.5rem',
};

export default function PostList() {
  const posts = useFetch<IPost>('/posts');

  return (
    <section>
      <h2>Post List</h2>

      <div>
        {posts.map((post) => (
          <div key={post.id} style={postCardStyle}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
