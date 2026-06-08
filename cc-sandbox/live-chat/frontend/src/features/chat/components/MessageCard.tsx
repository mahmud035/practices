import type { IMessage } from '../types/chat.types';

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

interface Props {
  message: IMessage;
}

export default function MessageCard({ message }: Props) {
  if (message.type === 'system') {
    return (
      <div className="py-2 text-center">
        <span className="text-xs text-system">{message.content}</span>
      </div>
    );
  }

  return (
    <div className="group flex flex-col gap-0.5 rounded-lg px-3 py-1.5 hover:bg-surface-raised">
      <div className="flex items-baseline gap-2">
        <span className="text-sm font-semibold text-primary">{message.username}</span>
        <span className="text-xs text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
          {formatTime(message.createdAt)}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-text">{message.content}</p>
    </div>
  );
}
