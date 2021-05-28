module.exports = {
  successResponse: (response, value) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.send(value);
  },
  notFound: (response, value) => {
    response.statusCode = 400;
    response.setHeader("Content-Type", "text/plain");
    response.send({ error: `Not found ${value}` });
  },
  NODE_PORT: 3100,
};
