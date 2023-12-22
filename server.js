const express = require("express");
const app = express();
var cors = require("cors");
const router = require("./routes");
const auth = require("./middleware/auth");
app.use(cors({
    origin: ['http://localhost:4200',,'http://localhost:5000','https://efs-ui-dev.azurewebsites.net','https://efs.incubxperts.com']}));
app.options(cors());

app.use(express.json()); //parse the json data and put it into req.body
app.use(auth);

app.use("/", router);

module.exports = app;
