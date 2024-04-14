import express from "express";

const app = express();

const router = express.Router();

router.get("/a", (req, res, next) => {
  res.send("Hello! This is route a");
});

router.post("/c", (req, res, next) => {
  res.send("Hello! This is route c");
});

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use(router);

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});
