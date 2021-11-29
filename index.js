if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_CONNECTION, {}, () =>
  console.log("Database connected")
);

app.use("/", require("./routes"));

app.listen(PORT, () =>
  console.log(`ann-tiquities server running on port ${PORT}`)
);
