import { useState } from 'react';
import useTasks from '../hooks/useTasks';
import { IState } from '../reducers/TaskReducer';

interface ITaskProps {
  task: IState;
}

export default function Task({ task }: ITaskProps) {
  const { taskDispatch } = useTasks();
  const [editText, setEditText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Update Task"
        />

        <button
          className="update"
          onClick={() => {
            taskDispatch({
              type: 'UPDATE_TASK',
              payload: { ...task, text: editText },
            });
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{task.text}</span>
        <button className="update" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <li key={task.id} className="task">
      {taskContent}

      <button
        className="delete"
        onClick={() =>
          taskDispatch({ type: 'DELETE_TASK', payload: { id: task.id } })
        }
      >
        Delete
      </button>
    </li>
  );
}
