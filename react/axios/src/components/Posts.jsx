export default function Posts({ posts, handleDeletePost, setPost }) {
  const handleKeyDownDelete = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleDeletePost(id);
    }
  };

  const handleKeyDownEdit = (event, post) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setPost(post);
    }
  };

  // NOTE: Added `onKeyDown` and `tabIndex` for accessibility.

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
                <span
                  tabIndex="0"
                  onClick={() => handleDeletePost(post.id)}
                  onKeyDown={(event) => handleKeyDownDelete(event, post.id)}
                >
                  ❌
                </span>
                <span
                  tabIndex="0"
                  onClick={() => setPost(post)}
                  onKeyDown={(event) => handleKeyDownEdit(event, post)}
                >
                  ✏️
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
