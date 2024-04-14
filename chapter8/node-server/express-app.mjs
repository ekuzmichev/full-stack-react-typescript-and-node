import express from "express";

const app = express();

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});
