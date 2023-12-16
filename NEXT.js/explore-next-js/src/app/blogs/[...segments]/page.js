import React from 'react';

const SingleBlog = ({ params }) => {
  const [year, id] = params.segments || [];
  console.log(params);

  return (
    <div>
      <h1>
        Single Blog: for year {year || new Date().getFullYear()} and id {id}
      </h1>
    </div>
  );
};

export default SingleBlog;
