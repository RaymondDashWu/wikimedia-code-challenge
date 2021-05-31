const dbConn = require('../dbConfig');

const Donation = function (donation) {
  this.last_name = donation.last_name
  this.first_name = donation.first_name
  this.street_address = donation.street_address
  this.street_address_l2 = donation.street_address_l2
  this.city = donation.city
  this.state_region = donation.state_region
  this.country = donation.country
  this.postal_code = donation.postal_code
  this.phone_number = donation.phone_number
  this.email = donation.email
  this.preferred_contact = donation.preferred_contact
  this.preferred_payment = donation.preferred_payment
  this.frequency = donation.frequency
  this.amount = donation.amount
  this.comments = donation.comments
  this.created_at = new Date()
  this.updated_at = new Date()
};

Donation.create = function (newDonation, result) {
  dbConn.query("INSERT INTO Donations set ?", newDonation, function (err, res) {
    if (err) {
      console.log("Error creating Donation obj: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Donation;