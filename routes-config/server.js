const app = require("./app");
require("dotenv").config();
const { PORT } = process.env;

app.listen(() => {
  console.log(`Server running at ${PORT}`);
});
