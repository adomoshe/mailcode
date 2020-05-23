var zipcodes = require('./assets/zipcodes.json');
var handleError = function (error) {
    console.warn(error);
};
var checkZipType = function (zip) {
    if (typeof zip === 'string') {
        return zip;
    }
    else if (typeof zip === 'number') {
        return zip.toString();
    }
    else {
        handleError('zip can be one of (string|number)');
    }
};
var getLocationFromZip = function (zip) {
    var location;
    var zipString;
    if (!zip) {
        return handleError('Please enter a zip (string|number)');
    }
    zipString = checkZipType(zip);
    if (zipString.length !== 5) {
        return handleError('Please enter a 5 digit zip (string|number)');
    }
    location = zipcodes[zip];
    if (!location) {
        return handleError("Location for zip '" + zip + "' was not found");
    }
    return location;
};
module.exports = {
    getLocationFromZip: getLocationFromZip
};
