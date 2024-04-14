import express from "express";
import bodyParser from "body-parser";

const app = express();

const router = express.Router();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("First middleware");
  next();
  // throw new Error("A failure occured!"); // To check last middleware that is intended to process errors
});

app.use(router);

router.get("/api/v1/users", (req, res, next) => {
  const users = [
    {
      id: 1,
      username: "Tom",
    },
    {
      id: 2,
      username: "Bob",
    },
    {
      id: 3,
      username: "Mike",
    },
  ];
  console.log("Got user ID:", req.query.userId);
  const user = users.find((user) => user.id === Number(req.query.userId));
  res.send("User: " + user?.username);
});

router.post("/api/v1/groups", (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: "Admins",
    },
    {
      id: 2,
      groupname: "Users",
    },
    {
      id: 3,
      groupname: "Employees",
    },
  ];
  console.log("Got group ID:", req.body.userId);
  const group = groups.find((group) => group.id === req.body.groupId);
  res.send("Group: " + group?.groupname);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});
