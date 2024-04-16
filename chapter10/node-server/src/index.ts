import express from "express";
import { createServer } from "http";

const app = express();

const server = createServer(app);

server.listen(8000, () => {
  console.log("The server is running!");
});
