"use client";

import { Hash, MessageCircle } from "lucide-react";
import type { Channel } from "./type";

interface ChannelListProps {
  channels: Channel[];
  selectedChannelId: string;
  onSelect: (channelId: string) => void;
  searchQuery: string;
}

export default function ChannelList({
  channels,
  selectedChannelId,
  onSelect,
  searchQuery,
}: ChannelListProps) {
  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-1 px-2">
      {filteredChannels.map((channel) => {
        const selected = channel.id === selectedChannelId;

        return (
          <button
            key={channel.id}
            onClick={() => onSelect(channel.id)}
            className={`group flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${
              selected
                ? "bg-slate-200 text-slate-900"
                : "text-slate-500 hover:bg-slate-200/70 hover:text-slate-900"
            }`}
          >
            <div className="flex min-w-0 items-center gap-2">
              {channel.type === "voice" ? (
                <MessageCircle className="h-3.5 w-3.5 shrink-0" />
              ) : (
                <Hash className="h-3.5 w-3.5 shrink-0" />
              )}

              <span
                className={`truncate text-xs ${
                  selected ? "font-semibold" : "font-medium"
                }`}
              >
                {channel.name}
              </span>
            </div>

            {channel.unread ? (
              <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-900 px-1.5 text-[10px] font-semibold text-white">
                {channel.unread}
              </span>
            ) : null}
          </button>
        );
      })}

      {filteredChannels.length === 0 && (
        <div className="px-3 py-6 text-center text-xs text-slate-400">
          No channels found
        </div>
      )}
    </div>
  );
}