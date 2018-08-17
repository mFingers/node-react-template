const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({
  port: process.env.PORT || 3000,
  routes: {
    files: {
      relativeTo: Path.join(process.cwd(), 'dist'),
    },
  },
});

const init = async () => {
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      },
    },
  });

  await server.start();
};

init();
