const Comments = async ({ commentsPromise }) => {
  const comments = await commentsPromise;

  return (
    <div>
      <h2 className="mt-3 text-xl">Comments</h2>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="mt-3">
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
