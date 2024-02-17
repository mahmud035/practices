export default function Posts({ posts, handleDeletePost, setPost }) {
  return (
    <div>
      <h2>All Posts</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <span>{post.id}</span>
              <span>{post.title}</span>
              <div>
                <span onClick={() => handleDeletePost(post.id)}>❌</span>
                <span onClick={() => setPost(post)}>✏️</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
