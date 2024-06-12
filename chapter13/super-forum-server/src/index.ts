import express from "express";

require("dotenv").config();

const app = express();

const port: number = Number(process.env.SERVER_PORT);

app.listen(port, () => {
  console.log(`Server ready on port ${port}. Mode: ${process.env.NODE_ENV}`);
});
