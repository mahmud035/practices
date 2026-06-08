import { useEffect, useRef } from 'react';
import type { IMessage } from '../types/chat.types';
import MessageCard from './MessageCard';

interface Props {
  messages: IMessage[];
  isLoading: boolean;
  isError: boolean;
}

function LoadingSkeleton() {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-1.5 px-3">
          <div className="flex gap-2">
            <div className="h-3 w-20 animate-pulse rounded bg-surface-raised" />
            <div className="h-3 w-10 animate-pulse rounded bg-surface-raised" />
          </div>
          <div
            className="h-3 animate-pulse rounded bg-surface-raised"
            style={{ width: `${55 + (i % 3) * 15}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export default function MessageList({ messages, isLoading, isError }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (isLoading) return <LoadingSkeleton />;

  if (isError) {
    return (
      <div className="flex flex-1 items-center justify-center text-sm text-text-muted">
        Failed to load message history.
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center text-sm text-text-muted">
        No messages yet. Be the first to say something!
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg) => (
        <MessageCard key={msg._id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
