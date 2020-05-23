const csv = require('csv-parser');
const fs = require('fs');

interface ParsedRow {
    lat: number
    lng: number
    city: string
    stateID: string
    state: string
    population: number
    // density: number
    // county: string
    counties: string
    // military: boolean
    timezone: string
};

const data = {};
fs.createReadStream('uszips.csv')
  .pipe(csv())
  .on('data', (row) => {
      const parsedRow: ParsedRow = {};
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
  .on('end', () => {
      const newFile: string = JSON.stringify(data);

    fs.writeFile('zipcodes.json', newFile, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      }); 
    console.log('CSV file successfully processed');
  });
  