const mongoose = require("mongoose");

const TestItem = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnail_url: {
    type: String,
  },
});

const TestItemModel = mongoose.model("test_item", TestItem);

module.exports = TestItemModel;
