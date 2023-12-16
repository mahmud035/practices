import React, { useState } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../actions/action';
import { useSelector, useDispatch } from 'react-redux';
import './Todo.css';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

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
              className="fa fa-plus add-btn"
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
