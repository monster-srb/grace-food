const { join } = require("path");

module.exports = {
  mode: "production",
  entry: join(__dirname, "/src/script/main.js"),
  output: { path: join(__dirname, "/public/script"), filename: "script.min.js", }
};
