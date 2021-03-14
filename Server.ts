import express from "express";
/* import expressLayouts from "express-ejs-layouts"; */
import path from "path";

const port = process.env.port || 6969;

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// categorizing the server

import {getHelpRouter} from "./routes/getHelpRoute";
import {indexRouter} from "./routes/indexRoute";


// Middleware for express

app.use(express.json());
/* app.use(expressLayouts); */
app.use(express.urlencoded({ extended: true }));

// rerouting the connections

app.use("/", indexRouter);
app.use("/getHelp", getHelpRouter);


app.listen(port, () => {
  console.log(`🚀 Server launched on port ${port}`);
});
