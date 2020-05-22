const zipcodes = require('./zipcodes.json');


const handleError = (error: string): object => {
  throw new Error(error)
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

export const getLocationFromZip = (zip: string | number): object => {
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
    return handleError(`Location for zip: ${zip} was not found`);
  }
  return location;
}

console.log(getLocationFromZip(94588))