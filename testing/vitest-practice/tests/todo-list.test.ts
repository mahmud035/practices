import { describe, expect, test } from 'vitest';
import { createTodoList } from '../src/todo-list';

describe('add', () => {
  test('adds a new todo', () => {
    const list = createTodoList();
    const todo = list.add('Buy groceries');

    expect(todo.text).toBe('Buy groceries');
    expect(todo.completed).toBe(false);
    expect(list.getAll()).toHaveLength(1);
  });

  test('assigns unique IDs to each todo', () => {
    const list = createTodoList();
    const first = list.add('First');
    const second = list.add('Second');

    expect(first.id).not.toBe(second.id);
  });

  test('throws when text is empty', () => {
    const list = createTodoList();
    expect(() => list.add('')).toThrow('Todo text cannot be empty');
  });

  test('throws when text is only whitespace', () => {
    const list = createTodoList();
    expect(() => list.add('    ')).toThrow('Todo text cannot be empty');
  });
});

describe('remove', () => {
  test('removes a todo by ID', () => {
    const list = createTodoList();
    const todo = list.add('Bug groceries');

    list.remove(todo.id);

    expect(list.getAll()).toHaveLength(0);
  });

  test('keeps other items when removing one', () => {
    const list = createTodoList();
    const first = list.add('First');
    list.add('Second');

    list.remove(first.id);

    expect(list.getAll()).toHaveLength(1);
    expect(list.getAll()[0].text).toBe('Second');
  });

  test('throws when ID does not exist', () => {
    const list = createTodoList();
    expect(() => list.remove(999)).toThrow('Todo with id 999 not found');
  });
});

describe('toggle', () => {
  test('marks a todo as completed', () => {
    const list = createTodoList();
    const todo = list.add('Buy groceries');

    list.toggle(todo.id);

    expect(list.getAll()[0].completed).toBe(true);
  });

  test('toggles back to incomplete', () => {
    const list = createTodoList();
    const todo = list.add('Buy groceries');

    list.toggle(todo.id);
    list.toggle(todo.id);

    expect(list.getAll()[0].completed).toBe(false);
  });

  test('throws when ID does not exist', () => {
    const list = createTodoList();
    expect(() => list.toggle(999)).toThrow('Todo with id 999 not found');
  });
});

describe('getCompleted', () => {
  test('returns only completed todos', () => {
    const list = createTodoList();
    const buy = list.add('Buy groceries');
    list.add('Clean house');
    list.toggle(buy.id);

    const completed = list.getCompleted();

    expect(completed).toHaveLength(1);
    expect(completed[0].text).toBe('Buy groceries');
  });

  test('returns empty array when nothing is completed', () => {
    const list = createTodoList();
    list.add('Buy groceries');

    expect(list.getCompleted()).toHaveLength(0);
  });
});

// Each describe block focuses on one method. Each test verifies one specific behavior. The test names read like a specification of what the module does. And if any of these tests fail, the name and the assertion will tell you exactly what broke.

// NOTE:
// Notice that we create a fresh createTodoList() in every test. This keeps tests independent, which means they can run in any order without affecting each other. If you find yourself repeating the same setup in every test, that's a good candidate for beforeEach or a test.extend fixture.

// What about `nextId`?
// The `nextId` counter at the top of the module is shared across all calls to createTodoList(), including across tests. This means IDs aren't predictable: one test might get IDs 1 and 2, while another gets 3 and 4 depending on execution order. This works fine here because the tests only check relative uniqueness (first.id !== second.id), not specific ID values. If a test asserted expect(todo.id).toBe(1), it would break depending on which tests ran before it. When you have shared module-level state like this, make sure your tests don't depend on its specific value.

// If you're building a web application and want to test components in a real browser environment, check out Component Testing for testing React, Vue, Svelte, and other UI frameworks.
