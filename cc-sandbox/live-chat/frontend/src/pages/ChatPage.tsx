import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSocketContext } from '../contexts/SocketContext';
import MessageInput from '../features/chat/components/MessageInput';
import MessageList from '../features/chat/components/MessageList';
import OnlineUsers from '../features/chat/components/OnlineUsers';
import TypingIndicator from '../features/chat/components/TypingIndicator';
import useMessages from '../features/chat/hooks/useMessages';
import useTyping from '../features/chat/hooks/useTyping';
import useSocket from '../hooks/useSocket';
import type { IMessage, TRoom } from '../features/chat/types/chat.types';

interface ChatState {
  username: string;
  room: TRoom;
}

export default function ChatPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const socket = useSocketContext();
  const state = location.state as ChatState | null;

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  // True once the initial REST history has been seeded into state.
  // Socket messages received before that point are held until history loads,
  // preventing duplicates and out-of-order rendering.
  const historyReadyRef = useRef(false);
  const pendingRef = useRef<IMessage[]>([]);

  const { data: initialMessages, isLoading, isError } = useMessages(state?.room);

  useEffect(() => {
    if (!initialMessages) return;
    // Flush any socket messages that arrived before history loaded
    setMessages([...initialMessages, ...pendingRef.current]);
    pendingRef.current = [];
    historyReadyRef.current = true;
  }, [initialMessages]);

  // Guard: redirect if navigated here directly without state
  useEffect(() => {
    if (!state?.username || !state?.room) {
      navigate('/', { replace: true });
      return;
    }
    // StrictMode in dev unmounts/remounts — reconnect if socket was cleaned up
    if (!socket.connected) {
      socket.connect();
      socket.emit('join-room', { username: state.username, room: state.room });
    }
    return () => {
      socket.emit('leave-room');
      socket.disconnect();
    };
  }, [socket, state, navigate]);

  useSocket('receive-message', (msg) => {
    if (!historyReadyRef.current) {
      pendingRef.current.push(msg);
      return;
    }
    setMessages((prev) => [...prev, msg]);
  });

  useSocket('user-joined', ({ message }) => {
    if (!historyReadyRef.current) {
      pendingRef.current.push(message);
      return;
    }
    setMessages((prev) => [...prev, message]);
  });

  useSocket('user-left', ({ message }) => {
    if (!historyReadyRef.current) {
      pendingRef.current.push(message);
      return;
    }
    setMessages((prev) => [...prev, message]);
  });

  useSocket('room-users', (users) => setOnlineUsers(users));

  const { typingUsers, emitTyping } = useTyping();

  if (!state?.username || !state?.room) return null;

  return (
    <div className="flex h-screen flex-col bg-bg">
      <header className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
        <h1 className="font-semibold text-text">
          <span className="text-text-muted mr-0.5">#</span>
          {state.room}
        </h1>
        <span className="text-sm text-text-muted">{state.username}</span>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex flex-1 flex-col overflow-hidden">
          <MessageList messages={messages} isLoading={isLoading} isError={isError} />
          <TypingIndicator typingUsers={typingUsers} />
          <MessageInput onType={emitTyping} />
        </main>
        <OnlineUsers users={onlineUsers} />
      </div>
    </div>
  );
}
