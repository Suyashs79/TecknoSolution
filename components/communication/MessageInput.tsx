"use client";
import type { Platform } from "./type";
import { useState, type KeyboardEvent } from "react";
import {
  AtSign,
  Image as ImageIcon,
  Paperclip,
  Send,
  Smile,
} from "lucide-react";


interface MessageInputProps {
  onSend: (message: string) => void;
  platform: Platform;
}

export default function MessageInput({
  onSend,
  platform,
}: MessageInputProps) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    onSend(trimmedMessage);
    setMessage("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="border-t border-slate-200 bg-white p-4">
      <div className="rounded-xl border border-slate-200 bg-slate-50 transition focus-within:border-slate-400 focus-within:bg-white">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          placeholder={`Message #channel on ${
            platform === "slack" ? "Slack" : "Discord"
          }...`}
          className="w-full resize-none bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />

        <div className="flex items-center justify-between px-2 pb-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              title="Attach file"
            >
              <Paperclip className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              title="Add image"
            >
              <ImageIcon className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              title="Mention"
            >
              <AtSign className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              title="Emoji"
            >
              <Smile className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={sendMessage}
            disabled={!message.trim()}
            className="flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <p className="mt-2 text-[10px] text-slate-400">
        Enter to send · Shift + Enter for a new line
      </p>
    </div>
  );
}