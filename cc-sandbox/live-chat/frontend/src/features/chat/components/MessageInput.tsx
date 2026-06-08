import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSocketContext } from '../../../contexts/SocketContext';

const messageSchema = z.object({
  content: z.string().min(1).max(2000),
});

type MessageFormData = z.infer<typeof messageSchema>;

interface Props {
  onType: () => void;
}

export default function MessageInput({ onType }: Props) {
  const socket = useSocketContext();

  const { register, handleSubmit, reset } = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = (data: MessageFormData) => {
    socket.emit('send-message', { content: data.content.trim() });
    reset();
  };

  return (
    <div className="border-t border-border bg-surface px-4 py-3">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <input
          type="text"
          placeholder="Message…"
          autoComplete="off"
          className="flex-1 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          {...register('content')}
          onKeyDown={onType}
        />
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
