import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";

const port = process.env.port || 6969;

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// categorizing the server

const getHelpRoute = require("./routes/authRoute");
const indexRoute = require("./routes/indexRoute");


// Middleware for express

app.use(express.json());
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

// rerouting the connections
app.use("/", indexRoute);
app.use("/getHelp", getHelpRoute);


app.listen(port, () => {
  console.log(`🚀 Server launched on port ${port}`);
});
