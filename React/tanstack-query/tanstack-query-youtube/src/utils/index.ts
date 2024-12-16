export const generateDefaultTodoFormValue = (): {
  id: string;
  title: string;
  description: string;
} => ({
  id: crypto.randomUUID(), // No need for `as` assertion
  title: '',
  description: '',
});
