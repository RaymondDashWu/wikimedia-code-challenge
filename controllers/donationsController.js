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
      res.json({
        error: false,
        message: "Thanks for your donation! Someone from our team will be in contact with you or your organization shortly.",
        data: donation
      });
    });
  }
})

module.exports = app