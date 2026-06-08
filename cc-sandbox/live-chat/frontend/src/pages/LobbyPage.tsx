import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useSocketContext } from '../contexts/SocketContext';
import { ROOMS, TRoom } from '../features/chat/types/chat.types';

const lobbySchema = z.object({
  username: z
    .string()
    .min(1, 'Display name is required')
    .max(30, 'Max 30 characters')
    .trim(),
  room: z.enum(ROOMS),
});

type LobbyFormData = z.infer<typeof lobbySchema>;

const ROOM_LABELS: Record<TRoom, string> = {
  general: 'General',
  tech: 'Tech',
  random: 'Random',
};

export default function LobbyPage() {
  const navigate = useNavigate();
  const socket = useSocketContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LobbyFormData>({
    resolver: zodResolver(lobbySchema),
    defaultValues: { room: 'general' },
  });

  const onSubmit = (data: LobbyFormData) => {
    socket.connect();
    socket.emit('join-room', { username: data.username, room: data.room });
    navigate('/chat', { state: { username: data.username, room: data.room } });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-xl">
        <h1 className="mb-1 text-2xl font-bold text-text">Live Chat</h1>
        <p className="mb-8 text-sm text-text-muted">Pick a name and a room to get started.</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          {/* Display name */}
          <div>
            <label htmlFor="username" className="mb-1.5 block text-sm font-medium text-text">
              Display name
            </label>
            <input
              id="username"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="e.g. Mahmud"
              className="w-full rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              {...register('username')}
            />
            {errors.username && (
              <p className="mt-1.5 text-xs text-red-400">{errors.username.message}</p>
            )}
          </div>

          {/* Room picker */}
          <div>
            <p className="mb-2 text-sm font-medium text-text">Room</p>
            <div className="flex gap-2">
              {ROOMS.map((room) => (
                <label
                  key={room}
                  className="flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm text-text-muted transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
                >
                  <input type="radio" value={room} className="sr-only" {...register('room')} />
                  {ROOM_LABELS[room]}
                </label>
              ))}
            </div>
            {errors.room && (
              <p className="mt-1.5 text-xs text-red-400">{errors.room.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
}
