const fs = require("fs");

fs.writeFile("test.txt", "Hello world", () => {
  fs.readFile("test.txt", "utf-8", (err, msg) => {
    console.log(msg);
  });
});
