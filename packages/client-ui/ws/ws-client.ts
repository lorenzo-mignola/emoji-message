import { hc } from 'hono/client'
import type app from '@lorenzo-mignola/server-app'

const connectToWs = async (color: 'red'|'blue') => {
  const client = hc<typeof app>(`http://localhost:${color === 'red' ? 3031 : 3032}`)
  // @ts-ignore
  const ws: WebSocket = client.ws.$ws(0)
  console.log("clg -> connectToWs -> ws:", ws)


  ws.addEventListener('open', () => {
    console.log('Connection opened');
  })

  return ws;
}

export default connectToWs