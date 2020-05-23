var csv = require('csv-parser');
var fs = require('fs');
;
var data = {};
fs.createReadStream('parser/uszips.csv')
    .pipe(csv())
    .on('data', function (row) {
    var parsedRow = {};
    parsedRow.lat = Number(row.lat);
    parsedRow.lng = Number(row.lng);
    parsedRow.city = row.city;
    parsedRow.stateID = row.state_id;
    parsedRow.state = row.state_name;
    parsedRow.population = Number(row.population);
    // parsedRow.density = Number(row.density);
    // parsedRow.county = row.country_name;
    parsedRow.counties = row.county_names_all;
    // parsedRow.military = row.military === 'FALSE' ? false : true;
    parsedRow.timezone = row.timezone;
    data[row.zip] = parsedRow;
})
    .on('end', function () {
    var newFile = JSON.stringify(data);
    fs.writeFile('zipcodes.json', newFile, function (err) {
        if (err)
            throw err;
        console.log('File is created successfully.');
    });
    console.log('CSV file successfully processed');
});
