import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Define the type for the store
interface ICounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the store
// const useCounterStore = create<ICounterStore>()((set) => ({
//   count: 1,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

// Create the store with devtools
const useCounterStore = create<ICounterStore>()(
  devtools((set) => ({
    count: 1,
    increment: () =>
      set(
        (state) => ({ count: state.count + 1 }),
        undefined,
        'count/increment'
      ),
    decrement: () =>
      set(
        (state) => ({ count: state.count - 1 }),
        undefined,
        'count/decrement'
      ),
  }))
);

export default useCounterStore;
