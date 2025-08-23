export default function Posts() {
  // Generate a lot of posts
  const posts = Array.from({ length: 1000 }, (_, index) => `Post ${index + 1}`);

  return (
    <>
      <h1>Post List</h1>

      <div>
        {posts.map((post) => (
          <div key={post} className="post">
            {post}
          </div>
        ))}
      </div>
    </>
  );
}
