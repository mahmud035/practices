export interface User {
  id: number;
  name: string;
}

// Pretend this hits a real database. In the test file, this whole
// module gets replaced via vi.mock(import('../src/db.js'), ...).
export function getUser(id: number): User {
  return { id, name: 'Real User' };
}
