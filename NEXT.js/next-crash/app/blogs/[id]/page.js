import { notFound } from 'next/navigation';

const SingleBlog = ({ params }) => {
  const { id } = params;

  if (id !== '1' && id !== '2') {
    notFound();
  }

  return <div className="mt-6">The blog id is: {id}</div>;
};

export default SingleBlog;
