# mailcode
library to lookup zipcodes

zipcode data from <https://simplemaps.com/data/us-zips>

## How to use

`npm i mailcode`

Currently, the only supported function is looking up a zipcode

`import { getLocationFromZip } from 'mailcode'`

`getLocationFromZip` accepts 5 numbers as a string or as numbers and will return:
```
{
    lat: number
    lng: number
    city: string
    stateID: string
    state: string
    population: number
    counties: string
    timezone: string
}
```