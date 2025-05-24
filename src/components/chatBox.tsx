export function ChatBox({ messages }: { messages: any[] }) {
    return (
       <div className="flex flex-col gap-2">
      {messages.map((m, i) => (
        <div key={i}>
          {m.type === "text" ? (
            <p>{m.content}</p>
          ) : (
            <audio controls src={m.content} />
          )}
        </div>
      ))}
    </div>
    )
}