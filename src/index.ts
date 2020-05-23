const zipcodes = require('./assets/zipcodes.json');

const handleError = (error: string): any => {
  console.warn(error)
};

const checkZipType = (zip: string | number): string => {
  if (typeof zip === 'string') {
    return zip;
  } else if (typeof zip === 'number') {
    return zip.toString();
  } else {
    handleError('zip can be one of (string|number)');
  }
}

const getLocationFromZip = (zip: string | number): object => {
  let location: object;
  let zipString: string;

  if (!zip) {
    return handleError('Please enter a zip (string|number)');
  }
  zipString = checkZipType(zip);
  if (zipString.length !== 5) {
    return handleError('Please enter a 5 digit zip (string|number)')
  }
  location = zipcodes[zip];
  if (!location) {
    return handleError(`Location for zip '${zip}' was not found`);
  }
  return location;
}

module.exports = {
  getLocationFromZip,
}