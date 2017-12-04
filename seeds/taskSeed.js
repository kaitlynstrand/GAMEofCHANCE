const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/chore-us',
	{
		useMongoClient: true
	}
);

const taskSeed = [
	{
		description: "take out garbage",
		time_due: 10102017,
		points: 8,
		claim: false,
		complete: false
	},
	{
		description: " fold laundry",
		time_due: 12252017,
		points: 11,
		claim: false,
		complete: false
	},
	{
		description: "clean bathroom",
		time_due: 11302017,
		points: 22,
		claim: false,
		complete: false
	}
];

db.Task
  .remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });