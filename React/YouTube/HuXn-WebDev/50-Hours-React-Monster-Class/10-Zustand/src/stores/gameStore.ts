import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface IGameStore {
  squares: (string | null)[];
  xIsNext: boolean;
  setSquares: (
    nextSquares:
      | (string | null)[]
      | ((prevSquares: (string | null)[]) => (string | null)[])
  ) => void;
}

const useGameStore = create<IGameStore>()(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set((state) => ({
          squares:
            typeof nextSquares === 'function'
              ? nextSquares(state.squares)
              : nextSquares,
        }));
      },
    };
  })
);

export default useGameStore;
