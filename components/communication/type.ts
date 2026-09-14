export type Platform = "slack" | "discord";

export type Channel = {
  id: string;
  name: string;
  unread?: number;
  type?: "text" | "voice";
};

export type Message = {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  reactions?: string[];
  isCurrentUser?: boolean;
};