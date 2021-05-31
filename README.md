# How to start
npm start

update dbConfig with your info

# Create SQL database
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
  `phone_number` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `preferred_contact` VARCHAR(45) NOT NULL,
  `preferred_payment` VARCHAR(45) NOT NULL,
  `frequency` VARCHAR(45) NOT NULL,
  `amount` VARCHAR(45) NOT NULL,
  `comments` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
```
# TODO
## Credit template html/css 
https://codesandbox.io/s/html-forms-fyvcr?file=/index.html:0-2279