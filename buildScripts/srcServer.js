import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import WebpackDevMiddleWare from "webpack-dev-middleware";
import config from "../webpack.config.dev.js";

/* eslint-disable no-console */

const __dirname = path.resolve();
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  WebpackDevMiddleWare(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../js--demodev-env/src/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
