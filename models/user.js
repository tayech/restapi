const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
});

module.exports = User = mongoose.model("users", user);