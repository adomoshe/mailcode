System.register("index", [], function (exports_1, context_1) {
    "use strict";
    var zipcodes, getLocationFromZip;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            zipcodes = require('./zipcodes.json');
            exports_1("getLocationFromZip", getLocationFromZip = function (zip) {
                var location;
                var zipString;
                var handleError = function (error) {
                    throw new Error(error);
                };
                if (!zip) {
                    console.error('Please enter a zip (string|number)');
                }
                else {
                    if (typeof zip === 'string') {
                        zipString = zip;
                    }
                    else if (typeof zip === 'number') {
                        zipString = zip.toString();
                    }
                    else {
                        return handleError('zip can be one of (string|number)');
                    }
                    (zipString.length !== 5);
                    handleError('Please enter a 5 digit zip (string|number)');
                    location = zipcodes[zip];
                    if (!location) {
                        handleError("Location for zip: " + zip + " was not found");
                    }
                }
                return location;
            });
            console.log(getLocationFromZip(94588));
        }
    };
});
