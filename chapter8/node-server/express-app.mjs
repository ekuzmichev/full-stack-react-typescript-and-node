import express from "express";
import bodyParser from "body-parser";

const app = express();

const router = express.Router();

router.get("/a", (req, res, next) => {
  res.send("Hello! This is route a");
});

router.post("/c", (req, res, next) => {
  res.send("Hello! This is route c. The message is: " + req.body.message);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("First middleware");
  next();
  // throw new Error("A failure occured!"); // To check last middleware that is intended to process errors
});

app.use(router);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});
