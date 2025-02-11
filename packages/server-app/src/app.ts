
import { createNodeWebSocket } from '@hono/node-ws';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import redisClient from './redis-client.js';

const app = new Hono();

const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({
  app
});

app.use(logger());

app.get(
  '/ws',
  upgradeWebSocket(c => {
    return {
      onMessage(event, ws) {
        console.log(`Message from client: ${event.data}`);
        ws.send('Hello from server!');
      },
      onClose: () => {
        console.log('Connection closed');
      }
    };
  })
);

app.get('/health', async c => {
  const response = await redisClient.sendCommand(['PING']);

  if (response !== 'PONG') {
    return c.text('ERROR');
  }

  return c.text('OK');
});

export { injectWebSocket };
export default app;
