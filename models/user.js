const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema

const userSchema = new Schema({

	username: { type: String, unique: true, required: true, trim: true },
	email: { type: String, unique: true, required: true, trim: true },
	phone: { type: String, required: false },
	password: { type: String, required: true },
	points_earned: { type: Number, required: false }
	})


// userSchema.methods.generateHash = password => {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = password => {
// 	return bcrypt.compareSync(password, this.local.password);
// };

const User = mongoose.model("User", userSchema)

module.exports = User
