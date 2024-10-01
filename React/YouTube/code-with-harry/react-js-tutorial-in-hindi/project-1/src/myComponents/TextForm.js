import React from 'react';
import { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState('');

  const handleUpperCaseClick = () => {
    // console.log('clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    // console.log('onChange');
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2> {props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary me-3" onClick={handleLowerCaseClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary " onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes to Read</p>
        <p>Sentence: {text.split('.').length - 1} </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
