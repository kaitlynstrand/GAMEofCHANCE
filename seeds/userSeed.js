const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/chore-us',
	{
		useMongoClient: true
	}
);

const userSeed = [
	{
		username: "k_strand"
		email: "kaitlyn.strand@gmail.com",
		phone: "224-622-0800",
		password: "NDcheer",
		points_earned: "28"
	},
	{
		username: "madmax"
		email: "mnteibel@gmail.com",
		phone: "555-555-5555",
		password: "raft4lyfe",
		points_earned: "101"
	},
	{
		username: "emc2"
		email: "esdras@gmail.com",
		phone: "888-888-8888",
		password: "tatata",
		points_earned: "11"
	}
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
