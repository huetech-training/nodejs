const app = require('./app');
const config = require('./config/config');

// let server;
const server = app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});

const unexpectedErrorHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
