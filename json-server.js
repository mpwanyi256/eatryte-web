const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.VUE_APP_PORT || 3020;

const app = server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// If the Node process ends, close the server connection
process.on("SIGINT", () => {
  console.log("Shuting down JSON Server...");
  app.close();
});
