import process from 'node:process'
import { serve } from '@hono/node-server'
import dotenv from 'dotenv'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

dotenv.config()

const app = new Hono()

app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = Number(process.env.PORT)
console.log(`RED SERVER is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
