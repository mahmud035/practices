import { useState } from 'react';
import type { IJob, IUser } from '../docs/handbook--everyday-types';

export default function Test() {
  // ✅ TypeScript infers from initial value
  const [count, setCount] = useState(0); // number

  // ✅ Need annotation for empty/null initial state
  const [user, setUser] = useState<IUser | null>(null);
  const [jobs, setJobs] = useState<IJob[]>([]);

  console.log(count, user, jobs, setCount, setUser, setJobs);
  return <div>Test</div>;
}
