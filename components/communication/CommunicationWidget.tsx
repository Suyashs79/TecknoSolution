"use client";
import type { Platform, Channel, Message } from "./type";
import { useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  Hash,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Users,
  Video,
  X,
} from "lucide-react";

import ChannelList from "./ChannelList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";



const slackChannels: Channel[] = [
  { id: "slack-general", name: "general" },
  { id: "slack-engineering", name: "engineering", unread: 4 },
  { id: "slack-product", name: "product" },
  { id: "slack-design", name: "design", unread: 2 },
  { id: "slack-random", name: "random" },
];

const discordChannels: Channel[] = [
  { id: "discord-general", name: "general" },
  { id: "discord-development", name: "development", unread: 7 },
  { id: "discord-gaming", name: "gaming" },
  { id: "discord-projects", name: "projects", unread: 3 },
  { id: "discord-lounge", name: "lounge" },
];

const slackMessages: Record<string, Message[]> = {
  "slack-general": [
    {
      id: "1",
      author: "Alex Morgan",
      avatar: "AM",
      content: "Good morning everyone! Hope you all have a productive day.",
      timestamp: "9:12 AM",
    },
    {
      id: "2",
      author: "Sarah Wilson",
      avatar: "SW",
      content: "Morning Alex! We are starting the sprint review at 11.",
      timestamp: "9:18 AM",
    },
    {
      id: "3",
      author: "You",
      avatar: "YO",
      content: "Perfect. I'll join the review.",
      timestamp: "9:21 AM",
      isCurrentUser: true,
    },
  ],

  "slack-engineering": [
    {
      id: "4",
      author: "Alex Morgan",
      avatar: "AM",
      content: "The latest API build has been deployed to staging.",
      timestamp: "8:42 AM",
    },
    {
      id: "5",
      author: "Sarah Wilson",
      avatar: "SW",
      content: "Nice. I'll run the integration tests now.",
      timestamp: "8:45 AM",
    },
    {
      id: "6",
      author: "Daniel Lee",
      avatar: "DL",
      content: "I've also pushed the authentication changes.",
      timestamp: "8:51 AM",
    },
    {
      id: "7",
      author: "You",
      avatar: "YO",
      content: "I'll review the authentication PR shortly.",
      timestamp: "8:54 AM",
      isCurrentUser: true,
    },
  ],

  "slack-product": [
    {
      id: "8",
      author: "Emily Carter",
      avatar: "EC",
      content: "The new dashboard requirements are ready for review.",
      timestamp: "10:03 AM",
    },
    {
      id: "9",
      author: "Alex Morgan",
      avatar: "AM",
      content: "I'll take a look this afternoon.",
      timestamp: "10:08 AM",
    },
  ],

  "slack-design": [
    {
      id: "10",
      author: "Emma Davis",
      avatar: "ED",
      content: "I've uploaded the latest dashboard designs.",
      timestamp: "11:15 AM",
    },
  ],

  "slack-random": [
    {
      id: "11",
      author: "Mike Johnson",
      avatar: "MJ",
      content: "Anyone up for coffee? ☕",
      timestamp: "12:02 PM",
    },
  ],
};

const discordMessages: Record<string, Message[]> = {
  "discord-general": [
    {
      id: "20",
      author: "Alex",
      avatar: "A",
      content: "Welcome everyone to the Teckno Space server!",
      timestamp: "9:30 AM",
    },
    {
      id: "21",
      author: "Sarah",
      avatar: "S",
      content: "Glad to be here 🚀",
      timestamp: "9:35 AM",
    },
  ],

  "discord-development": [
    {
      id: "22",
      author: "DevMaster",
      avatar: "D",
      content: "The latest development build is ready.",
      timestamp: "10:12 AM",
    },
    {
      id: "23",
      author: "CodeNinja",
      avatar: "C",
      content: "I'll test it against the new API.",
      timestamp: "10:18 AM",
    },
    {
      id: "24",
      author: "You",
      avatar: "YO",
      content: "Let me know if you find any issues.",
      timestamp: "10:21 AM",
      isCurrentUser: true,
    },
  ],

  "discord-gaming": [
    {
      id: "25",
      author: "PixelKing",
      avatar: "P",
      content: "Who's playing tonight?",
      timestamp: "7:32 PM",
    },
  ],

  "discord-projects": [
    {
      id: "26",
      author: "Alex",
      avatar: "A",
      content: "Project Alpha is moving to the next phase.",
      timestamp: "2:14 PM",
    },
  ],

  "discord-lounge": [
    {
      id: "27",
      author: "Sarah",
      avatar: "S",
      content: "What is everyone working on today?",
      timestamp: "1:08 PM",
    },
  ],
};

export default function CommunicationWidget() {
  const [platform, setPlatform] = useState<Platform>("slack");
  const [selectedChannelId, setSelectedChannelId] =
    useState("slack-engineering");

  const [searchQuery, setSearchQuery] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const channels = platform === "slack" ? slackChannels : discordChannels;

  const currentMessages =
    platform === "slack"
      ? slackMessages[selectedChannelId] || []
      : discordMessages[selectedChannelId] || [];

  const displayedMessages = messages.length > 0 ? messages : currentMessages;

  const selectedChannel = useMemo(
    () => channels.find((channel) => channel.id === selectedChannelId),
    [channels, selectedChannelId]
  );

  function changePlatform(nextPlatform: Platform) {
    setPlatform(nextPlatform);

    if (nextPlatform === "slack") {
      setSelectedChannelId("slack-engineering");
    } else {
      setSelectedChannelId("discord-development");
    }

    setMessages([]);
  }

  function changeChannel(channelId: string) {
    setSelectedChannelId(channelId);
    setMessages([]);
  }

  function handleSendMessage(content: string) {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      author: "You",
      avatar: "YO",
      content,
      timestamp: "Just now",
      isCurrentUser: true,
    };

    setMessages((previous) => [...(previous.length ? previous : currentMessages), newMessage]);
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Communication
            </h2>

            <p className="text-xs text-slate-500">Connect with your teams</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            title="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>

          <button
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            title="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Platform switcher */}
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex rounded-lg border border-slate-200 bg-white p-1">
            <button
              onClick={() => changePlatform("slack")}
              className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                platform === "slack"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Slack
            </button>

            <button
              onClick={() => changePlatform("discord")}
              className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                platform === "discord"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Discord
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href =
                platform === "slack"
                  ? "/api/integrations/slack/connect"
                  : "/api/integrations/discord/connect";
            }}
            className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 sm:flex"
          >
            <Plus className="h-3.5 w-3.5" />
            Connect
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="border-b border-slate-200 px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search channels and messages..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
          />
        </div>
      </div>

      {/* Main communication area */}
      <div className="grid min-h-[540px] grid-cols-[190px_minmax(0,1fr)]">
        {/* Channels */}
        <div className="border-r border-slate-200 bg-slate-50">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-slate-400" />

              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Channels
              </span>
            </div>

            <button className="rounded p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700">
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          <ChannelList
            channels={channels}
            selectedChannelId={selectedChannelId}
            onSelect={changeChannel}
            searchQuery={searchQuery}
          />
        </div>

        {/* Messages */}
        <div className="flex min-w-0 flex-col bg-white">
          {/* Channel header */}
          <div className="flex h-14 items-center justify-between border-b border-slate-200 px-5">
            <div className="flex min-w-0 items-center gap-2">
              <Hash className="h-4 w-4 shrink-0 text-slate-400" />

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-slate-900">
                  {selectedChannel?.name || "general"}
                </h3>

                <p className="text-[11px] text-slate-500">
                  {platform === "slack" ? "Slack workspace" : "Discord server"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                title="Members"
              >
                <Users className="h-4 w-4" />
              </button>

              <button
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                title="Start call"
              >
                <Video className="h-4 w-4" />
              </button>

              <button
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                title="More"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <MessageList messages={displayedMessages} />

          {/* Input */}
          <MessageInput onSend={handleSendMessage} platform={platform} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2">
        <div className="text-[10px] text-slate-400">
          {platform === "slack"
            ? "Slack preview • API integration coming next"
            : "Discord preview • API integration coming next"}
        </div>

        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Connected
        </div>
      </div>
    </section>
  );
}