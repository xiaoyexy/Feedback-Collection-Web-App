const mongoose = require("mongoose");
const { Schema } = mongoose; // equal to:  const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0 },
  //   name: String,
});

mongoose.model("users", userSchema);
