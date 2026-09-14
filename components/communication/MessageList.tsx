"use client";

import { SmilePlus } from "lucide-react";
import type { Message } from "./type";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto px-5 py-5">
      <div className="space-y-5">
        {messages.length === 0 ? (
          <div className="flex h-full min-h-[350px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <SmilePlus className="h-5 w-5 text-slate-400" />
              </div>

              <p className="text-sm font-medium text-slate-700">
                No messages yet
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Start the conversation.
              </p>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`group flex gap-3 ${
                message.isCurrentUser ? "justify-end" : ""
              }`}
            >
              {!message.isCurrentUser && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-semibold text-white">
                  {message.avatar}
                </div>
              )}

              <div
                className={`max-w-[78%] ${
                  message.isCurrentUser ? "items-end" : ""
                }`}
              >
                <div
                  className={`mb-1 flex items-center gap-2 ${
                    message.isCurrentUser ? "justify-end" : ""
                  }`}
                >
                  <span className="text-xs font-semibold text-slate-800">
                    {message.author}
                  </span>

                  <span className="text-[10px] text-slate-400">
                    {message.timestamp}
                  </span>
                </div>

                <div
                  className={`rounded-xl px-3 py-2.5 text-xs leading-5 ${
                    message.isCurrentUser
                      ? "rounded-tr-sm bg-slate-900 text-white"
                      : "rounded-tl-sm bg-slate-100 text-slate-700"
                  }`}
                >
                  {message.content}
                </div>

                {message.reactions && message.reactions.length > 0 && (
                  <div className="mt-1 flex gap-1">
                    {message.reactions.map((reaction, index) => (
                      <span
                        key={`${reaction}-${index}`}
                        className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px]"
                      >
                        {reaction}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {message.isCurrentUser && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-[10px] font-semibold text-slate-700">
                  {message.avatar}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}