import React from 'react';

const Poem = () => {
  const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.',
    ],
  };

  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(<hr key={i + '-separator'} />);

    output.push(<p key={i + '-text'}>{line}</p>);
  });

  output.shift();

  return (
    <article>
      <h1>Poem</h1>

      {output}
    </article>
  );
};

export default Poem;
