export interface IState {
  id: string;
  text: string;
}

export type TASK_ACTIONS_TYPE = 'ADD_TASK' | 'UPDATE_TASK' | 'DELETE_TASK';

export interface ITaskAction {
  type: TASK_ACTIONS_TYPE;
  payload: Partial<IState>;
}

// Initial State
export const initialTasks: IState[] = [
  { id: crypto.randomUUID(), text: 'Philosophers Path' },
  { id: crypto.randomUUID(), text: 'Visit the temple' },
  { id: crypto.randomUUID(), text: 'Drink matcha' },
];

// Reducer Function
export const taskReducer = (tasks: IState[], action: ITaskAction): IState[] => {
  switch (action.type) {
    case 'ADD_TASK': {
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          text: action.payload.text ?? '',
        },
      ];
    }
    case 'UPDATE_TASK': {
      return tasks.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              text: action.payload.text ?? '',
            }
          : task
      );
    }
    case 'DELETE_TASK': {
      return tasks.filter((t) => t.id !== action.payload.id);
    }

    default:
      return tasks;
  }
};
