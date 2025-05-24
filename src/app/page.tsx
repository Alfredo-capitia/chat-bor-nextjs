"use client"

import { useState } from "react"
import { useSocket } from "@/hooks/useSocket"
import { ChatBox } from "@/components/ChatBox"
import { MessageInput } from "@/components/MessageInput"
import { VoiceRecorder } from "@/components/VoiceRecorder"

export default function Home() {
  const [messages, setMessages] = useState<any[]>([])

  useSocket(
    (msg) => setMessages((prev) => [...prev, { type: "text", content: msg }]),
    (audio) => setMessages((prev) => [...prev, { type: "voice", content: audio.content }])
  )

  return (
    <main className="p-4">
      <ChatBox messages={messages} />
      <div className="flex gap-2 mt-4">
        <MessageInput />
        <VoiceRecorder />
      </div>
    </main>
  )
}
