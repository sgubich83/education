// @ts-ignore
const express = require("express");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

app.listen(config.NODE_PORT, () => {
  console.log(`Started on PORT ${config.NODE_PORT}`); // eslint-disable-line
});
