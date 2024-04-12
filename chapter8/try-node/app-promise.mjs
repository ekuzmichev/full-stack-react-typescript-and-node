import * as fs from "node:fs/promises";

(async function () {
  await fs.writeFile("test-promise.txt", "Hello Promises");
  const readText = await fs.readFile("test-promise.txt", "utf-8");
  console.log(readText);
})();
