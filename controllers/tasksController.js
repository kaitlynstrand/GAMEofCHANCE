const db = require("../models");

// Defining methods for the tasksController
module.exports = {
  findAll: function(req, res) {
    db.Task
      .find(req.query)
      .sort({ id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByClaim: function(req, res) {
    db.Task
      .find(req.query)
      .sort({date_due: 1})
      .where({claim: false})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByComplete: function(req, res) {
    db.Task
      .find(req.query)
      .sort({date_due: 1})
      .where({claim: true})
      .where({complete: false})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Task
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Task
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateClaim: function(req, res) {
    db.Task
      .findOneAndUpdate({ _id: req.params.id }, {claim: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateComplete: function(req, res) {
    db.Task
      .findOneAndUpdate({ _id: req.params.id }, {complete: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
