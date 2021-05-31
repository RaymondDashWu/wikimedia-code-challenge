const Donation = require('../models/donationsModel');
const app = require('express')();

  app.post('/', (req, res) => {
    const newDonation = new Donation(req.body);
    console.log("req", req)
    if (req.query === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({
        error: true,
        message: 'Not all fields were filled'
      });
    } else {
      Donation.create(newDonation, function (err, donation) {
        if (err)
          res.send(err);
        res.json({
          error: false,
          message: "Thanks for your donation! Someone from our team will be in contact with you or your organization shortly.",
          data: donation
        });
      });
    }
  })

module.exports = app