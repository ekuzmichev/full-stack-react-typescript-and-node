import express from "express";
import session from "express-session";
import Redis from "ioredis";

declare module "express-session" {
  export interface SessionData {
    userId: string;
    loadedCount: number;
  }
}

require("dotenv").config();

const app = express();
const router = express.Router();

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD, // Comment the line in the case when the password is not set
});

const RedisStore = require("connect-redis").default;

const redisStore = new RedisStore({
  client: redis,
});

app.use(
  session({
    store: redisStore,
    name: process.env.COOKIE_NAME,
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      httpOnly: true, // The cookie is not available from JavaScript
      secure: false, // We are not using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      sameSite: "strict",
    },
  })
);

app.use(router);

router.get("/", (req, res, next) => {
  if (!req.session!.userId) {
    req.session!.userId = req.query.userId as string;
    console.log("UserId is set");
    req.session!.loadedCount = 0;
  } else {
    req.session!.loadedCount = Number(req.session!.loadedCount) + 1;
  }

  res.send(
    `userId: ${req.session!.userId}, loadedCount: ${req.session!.loadedCount}`
  );
});

const port: number = Number(process.env.SERVER_PORT);

app.listen(port, () => {
  console.log(`Server ready on port ${port}. Mode: ${process.env.NODE_ENV}`);
});
