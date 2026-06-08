export const ROOMS = ['general', 'tech', 'random'] as const;
export type TRoom = (typeof ROOMS)[number];
export type TMessageType = 'message' | 'system';

export interface IMessage {
  _id: string;
  room: TRoom;
  username: string;
  content: string;
  type: TMessageType;
  createdAt: string;
}

// Mirror the backend socket event contracts exactly so API changes break TS at compile time.
export interface ServerToClientEvents {
  'receive-message': (msg: IMessage) => void;
  'user-joined': (data: { username: string; room: string; message: IMessage }) => void;
  'user-left': (data: { username: string; room: string; message: IMessage }) => void;
  'room-users': (usernames: string[]) => void;
  typing: (data: { username: string }) => void;
  'stop-typing': (data: { username: string }) => void;
}

export interface ClientToServerEvents {
  'join-room': (data: { username: string; room: string }) => void;
  'send-message': (data: { content: string }) => void;
  typing: () => void;
  'stop-typing': () => void;
  'leave-room': () => void;
}
