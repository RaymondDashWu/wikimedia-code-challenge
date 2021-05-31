Thanks for considering me Wikimedia!

## Run locally

1. Install [Node.js and npm](https://nodejs.org/)
1. Run `npm install`
1. Run `npm start`
1. Visit [http://localhost:5000](http://localhost:5000)
1. Create SQL database (detailed below)
1. update dbConfig with your SQL info. MySQL was used in the creation of this project

## Create SQL database
```sql
CREATE TABLE `Donations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `last_name` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `street_address` VARCHAR(45) NOT NULL,
  `street_address_l2` VARCHAR(45) NULL COMMENT 'Line 2 street address (optional)',
  `city` VARCHAR(45) NOT NULL,
  `state_region` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `postal_code` VARCHAR(45) NOT NULL COMMENT 'UK, Canada, etc. postal codes are alphanumeric',
  `phone_number` VARCHAR(15) NOT NULL COMMENT 'longest int phone # is 15 chars\' ;,
  `email` VARCHAR(45) NOT NULL,
  `preferred_contact` VARCHAR(45) NOT NULL,
  `preferred_payment` VARCHAR(45) NOT NULL,
  `frequency` VARCHAR(45) NOT NULL,
  `amount` VARCHAR(45) NOT NULL,
  `comments` VARCHAR(300) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
```

# TODO
## Credit template html/css 
https://codesandbox.io/s/html-forms-fyvcr?file=/index.html:0-2279
- country 
- static confirmation page

# Improvements
- Autocomplete for location (Google Places Autocomplete, smartystreets Address Autocomplete, etc.)
  - Could not find a free way to do so. Algolia Places formerly had a free tier but is being sunset and no longer accepting new users as of the creation of this project