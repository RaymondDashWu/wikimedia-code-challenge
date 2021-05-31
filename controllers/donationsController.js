const Donation = require('../models/donationsModel');
const app = require('express')();

app.post('/', (req, res) => {
  const newDonation = new Donation(req.body);
  // console.log("req.query", req.query)
  if (req.body === Object && Object.keys(req.body).length === 0) {
    return res.status(400).send({
      error: true,
      message: 'Not all fields were filled'
    });
  } else {
    Donation.create(newDonation, function (err, donation) {
      if (err) {
        return res.send(err);
      }
      const path = require('path');
      res.sendFile(path.resolve('views/confirmation.html'));
    });
  }
})

module.exports = app