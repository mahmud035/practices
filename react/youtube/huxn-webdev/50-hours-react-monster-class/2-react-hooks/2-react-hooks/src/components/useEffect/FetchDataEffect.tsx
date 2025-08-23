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

export default function FetchDataEffect() {
  const posts = useFetch<IPost>('/posts');

  return (
    <section>
      <h2>Post List</h2>

      <div>
        {posts.slice(0, 1).map((post) => (
          <h3 key={post.id} style={postCardStyle}>
            {post.title}
          </h3>
        ))}
      </div>
    </section>
  );
}
