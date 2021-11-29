if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const dbString = process.env.MONGODB_CONNECTION;

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(dbString, {}, () =>
  console.log("Database connected")
);

app.use("/", require("./routes"));

app.listen(PORT, () =>
  console.log(`ann-tiquities server running on port ${PORT}`)
);
