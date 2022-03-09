const { User } = require("discord.js");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  discordId: { type: String, required: true },
  discordUser: { type: String, required: true },
  astaCoins: { type: Number, default: 10 },
});

const model = mongoose.model("UserModel", UserSchema);
module.exports = model;
