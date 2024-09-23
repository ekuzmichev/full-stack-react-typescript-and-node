import express from "express";
import session from "express-session";
import Redis from "ioredis";
import { DataSource } from "typeorm";

declare module "express-session" {
  export interface SessionData {
    userId: string;
    loadedCount: number;
  }
}

const dotenv = require("dotenv");
const dotenvParseVariables = require("dotenv-parse-variables");

let env = dotenv.config({});
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);

console.log(env);

const main = async () => {
  const app = express();
  const router = express.Router();

  const AppDataSource = new DataSource({
    type: "postgres",
    host: env.PG_HOST,
    port: parseInt(String(env.PG_PORT)),
    username: env.PG_USERNAME,
    password: env.PG_PASSWORD,
    database: env.PG_DATABASE,
    synchronize: env.PG_SYNCHRONIZE,
    logging: env.PG_LOGGING,
    entities: [env.PG_ENTITIES],
  });

  await AppDataSource.initialize()
    .then((dataSource) => {
      console.log(
        `Data Source has been initialized: ${dataSource.isInitialized}`
      );
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  const redis = new Redis({
    host: env.REDIS_HOST,
    port: Number(env.REDIS_PORT),
    password: env.REDIS_PASSWORD, // Comment the line in the case when the password is not set
  });

  const RedisStore = require("connect-redis").default;

  const redisStore = new RedisStore({
    client: redis,
  });

  app.use(
    session({
      store: redisStore,
      name: env.COOKIE_NAME,
      secret: env.SESSION_SECRET as string,
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

  const port: number = Number(env.SERVER_PORT);

  app.listen(port, () => {
    console.log(`Server ready on port ${port}. Mode: ${env.NODE_ENV}`);
  });
};

main();
