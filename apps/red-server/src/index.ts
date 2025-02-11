import process from 'node:process'
import { serve } from '@hono/node-server'
import app, { injectWebSocket } from '@lorenzo-mignola/server-app'
import dotenv from 'dotenv'

dotenv.config()

const port = Number(process.env.PORT)
console.log(`🔴 RED SERVER 🔴 is running on http://localhost:${port}`)

const server = serve({
  fetch: app.fetch,
  port,
})

injectWebSocket(server)
