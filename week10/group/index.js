import {getJSON, getLocation} from 'utilities.js';
import QuakesController from 'QuakesController';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const controller = new QuakesController('#quakeList');
controller.init();
const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
          };
            const position = await getLocation(options);
            console.log(position);
            this.position.lat = position.coords.latitude;
            this.position.log = position.coords.longitude;