const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/chore-us',
	{
		useMongoClient: true
	}
);

const groupSeed = [
	{
		name: "bestGROUPever"
	},
	{
		name: "roomiesforlife"
	},
	{
		name: "workbuddies"
	}
];

db.Group
  .remove({})
  .then(() => db.Group.collection.insertMany(groupSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });