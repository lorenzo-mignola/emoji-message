import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import process from 'node:process';
import app, { injectWebSocket } from '@lorenzo-mignola/server-app';

dotenv.config();

const port = Number(process.env.PORT);
console.log(`🔵 BLUE SERVER 🔵 is running on http://localhost:${port}`);

const server = serve({
  fetch: app.fetch,
  port
});

injectWebSocket(server);
