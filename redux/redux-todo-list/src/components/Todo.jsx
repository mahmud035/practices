import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/action';
import './Todo.css';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  // NOTE: Added `onKeyDown` and `tabIndex` for accessibility.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      dispatch(addTodo(inputData));
      setInputData('');
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              onClick={() => dispatch(addTodo(inputData), setInputData(''))}
              onKeyDown={handleKeyDown}
              tabIndex="0"
              className="fa fa-plus add-btn"
              role="button"
              aria-pressed="false"
            ></i>
          </div>

          <div className="showItems">
            {list.map((element) => (
              <div key={element.id} className="eachItem">
                <h3>{element.data}</h3>
                <div className="todo-btn"></div>
                <i
                  onClick={() => dispatch(deleteTodo(element.id))}
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  tabIndex="1"
                  role="button"
                  aria-pressed="false"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      dispatch(deleteTodo(element.id));
                    }
                  }}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
