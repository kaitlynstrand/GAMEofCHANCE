const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: false },
	password: { type: String, required: true },
	points_earned: { type: Number, required: false }
})

const User = mongoose.model("User", userSchema)

module.exports = User