const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./controllers/authController")(app);

app.listen(process.env.PORT || 8081, () => console.log("Server is run!"));
