const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema

const userSchema = new Schema({
	local: {
	username: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: false },
	password: { type: String, required: true },
	points_earned: { type: Number, required: false }
	},

	facebook: {
		id: { type: String, required: true },
		token: { type: String, required: true },
		name: { type: String, required: true },
		email: { type: String, required: true }
	},

	twitter: {
		id: { type: String, required: true },
		token: { type: String, required: true },
		displayName: { type: String, required: true },
		username: { type: String, required: true }
	},

	google: {
		id: { type: String, required: true },
		token: { type: String, required: true },
		email: { type: String, required: true },
		name: { type: String, required: true }
	}	
});

userSchema.methods.generateHash = password => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = password => {
	return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model("User", userSchema)

module.exports = User
