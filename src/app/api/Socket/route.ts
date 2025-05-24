import { NextApiResponse } from 'next'
import { Server } from 'socket.io'
import { NextRequest } from 'next/server'

export const config = { api: { bodyParser: false } }

let io: Server | undefined

export default async function handler(req: NextRequest, res: NextApiResponse) {
  if (!res.socket?.server?.io) {
    io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on("connection", (socket) => {
      console.log("Usuário conectado")

      socket.on("send-message", (msg) => {
        io?.emit("receive-message", msg)
      })

      socket.on("voice-message", (data) => {
        io?.emit("voice-message", data)
      })
    })
  }

  res.end()
}
