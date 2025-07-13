import Link from 'next/link';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Blog 1 description',
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Blog 2 description',
    },
  ];

  return (
    <main className="mt-10">
      <div>Blog List:</div>
      <hr />

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="my-3">
            <Link href={`/blogs/${blog.id}`}> {blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
