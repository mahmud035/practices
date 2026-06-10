import { useState } from 'react'
import { type Board, type Player, checkWinner, isDraw } from './game'

const EMPTY_BOARD: Board = Array(9).fill(null)

type Score = Record<Player | 'Draw', number>

export default function App() {
  const [board, setBoard] = useState<Board>([...EMPTY_BOARD])
  const [current, setCurrent] = useState<Player>('X')
  const [score, setScore] = useState<Score>({ X: 0, O: 0, Draw: 0 })

  const result = checkWinner(board)
  const draw = !result && isDraw(board)
  const winningLine = result?.line ?? []
  const gameOver = !!result || draw

  function handleClick(index: number) {
    if (board[index] || gameOver) return
    const next = board.map((cell, i) => (i === index ? current : cell)) as Board
    const nextResult = checkWinner(next)
    const nextDraw = !nextResult && isDraw(next)

    setBoard(next)
    if (nextResult) {
      setScore((s) => ({ ...s, [nextResult.winner]: s[nextResult.winner] + 1 }))
    } else if (nextDraw) {
      setScore((s) => ({ ...s, Draw: s.Draw + 1 }))
    } else {
      setCurrent(current === 'X' ? 'O' : 'X')
    }
  }

  function reset() {
    setBoard([...EMPTY_BOARD])
    setCurrent(result ? (result.winner === 'X' ? 'O' : 'X') : current === 'X' ? 'O' : 'X')
  }

  function fullReset() {
    setBoard([...EMPTY_BOARD])
    setCurrent('X')
    setScore({ X: 0, O: 0, Draw: 0 })
  }

  const statusText = result
    ? `Player ${result.winner} wins!`
    : draw
      ? "It's a draw!"
      : `Player ${current}'s turn`

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8 w-full max-w-sm">

        <h1 className="text-4xl font-bold tracking-tight text-white">Tic-Tac-Toe</h1>

        {/* Scoreboard */}
        <div className="grid grid-cols-3 w-full gap-3">
          {(['X', 'Draw', 'O'] as const).map((key) => (
            <div key={key} className="flex flex-col items-center rounded-xl py-3 bg-gray-800 gap-1">
              <span className={`text-xs font-semibold uppercase tracking-widest ${
                key === 'X' ? 'text-blue-400' : key === 'O' ? 'text-rose-400' : 'text-gray-400'
              }`}>
                {key === 'Draw' ? 'Draw' : `Player ${key}`}
              </span>
              <span className="text-2xl font-bold text-white">{score[key]}</span>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className={`text-lg font-semibold ${
          result
            ? result.winner === 'X' ? 'text-blue-400' : 'text-rose-400'
            : draw
              ? 'text-yellow-400'
              : current === 'X' ? 'text-blue-300' : 'text-rose-300'
        }`}>
          {statusText}
        </div>

        {/* Board */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {board.map((cell, i) => {
            const isWinCell = winningLine.includes(i)
            return (
              <button
                key={i}
                onClick={() => handleClick(i)}
                disabled={!!cell || gameOver}
                className={`
                  aspect-square rounded-xl text-5xl font-bold transition-all duration-150 select-none cursor-pointer
                  disabled:cursor-default
                  ${isWinCell
                    ? cell === 'X'
                      ? 'bg-blue-500 text-white scale-95'
                      : 'bg-rose-500 text-white scale-95'
                    : cell === 'X'
                      ? 'bg-gray-800 text-blue-400'
                      : cell === 'O'
                        ? 'bg-gray-800 text-rose-400'
                        : 'bg-gray-800 hover:bg-gray-700'
                  }
                `}
              >
                {cell}
              </button>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3 w-full">
          <button
            onClick={reset}
            className="flex-1 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
          >
            Next Round
          </button>
          <button
            onClick={fullReset}
            className="flex-1 py-3 rounded-xl font-semibold bg-gray-700 hover:bg-gray-600 text-white transition-colors cursor-pointer"
          >
            Reset All
          </button>
        </div>

      </div>
    </div>
  )
}
