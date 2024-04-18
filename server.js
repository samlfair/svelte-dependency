import { createServer } from 'vite';

const config = {
  // any valid user config options, plus `mode` and `configFile`
  server: {
    port: 1337,
  },
};

async function runServer() {
  const server = await createServer(config);
  await server.listen();

  server.printUrls();
  server.bindCLIShortcuts({ print: true });
}

runServer();
