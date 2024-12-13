require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;

const vehicles = require("./routes/vehicles");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/vehicle/", vehicles);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log("listening on http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
