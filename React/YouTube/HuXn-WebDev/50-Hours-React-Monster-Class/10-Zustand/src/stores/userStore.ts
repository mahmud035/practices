import { create } from 'zustand';

// Define the type for the store
interface IUserStore {
  name: string;
  loading: boolean;
  fetchUser: (id: number) => Promise<void>;
}

// Create the store
const useUserStore = create<IUserStore>()((set) => ({
  name: '',
  loading: false,
  fetchUser: async (id) => {
    set({ loading: true });
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    set({ name: user.name, loading: false });
  },
}));

export default useUserStore;
