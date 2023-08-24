import jwt from "jsonwebtoken";
import * as fs from "fs";

try {
  fs.writeFileSync("jwt", jwt.sign({ role: "admin" }, "zwtr"));
} catch (err) {
  console.error(err);
}
