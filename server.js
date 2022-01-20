require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes");
const app = express();
require("./config/database");
const passport = require("passport");

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api", Router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(process.env.PORT || "4000", "0.0.0.0", () => {
  console.log(`El server esta en el puerto ${process.env.PORT || "4000"}`);
});
