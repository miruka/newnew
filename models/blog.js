const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

const blogSchema = mongoose.Schema(
  {
    //_id: mongoose.Types.ObjectId,
    // _id: mongoose.Schema.Types.ObjectId,

    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
