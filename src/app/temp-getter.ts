import { FindIP } from './ip-getter'

export class LocalizedTemp {
  public latLong: Object = {lat: null, long: null};

  constructor() {
    const location = new FindIP();

    location.getLatLong().then((output) =>
    {
      // console.log('constructor!')
      // console.log(output)

      const localWeather = this.getLocalWeather(output);
      localWeather.then(function(gotIt) { console.log(gotIt)});

    });
  }

  getLocalWeather(locationObject) {
    return new Promise( (resolve, reject) => {
      const request = new XMLHttpRequest();
      const apiKey = 'f5610eb6d29c21a7c6512663e3dfa70e';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationObject.lat}&lon=${locationObject.long}&appid=${apiKey}`

      request.onload = function() {
        if (this.status === 200) {
          resolve(JSON.parse(request.response));
        } else { reject(Error(request.statusText)); }
      }

      request.open('GET',url);
      request.send();
    })
  }

  getLatLong() {
    return new Promise( (resolve, reject) => {
      const request = new XMLHttpRequest();
      const apiKey = '3d543986f94c7663da4080a326c176c0';
      const url = `http://api.ipstack.com/check?access_key=${apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          const rawData = {
            lat: JSON.parse(request.response)["latitude"],
            long: JSON.parse(request.response)["longitude"]
          };

          resolve(rawData);
        } else { reject(Error(request.statusText)); }
      }

      request.open('GET', url);
      request.send();

    });
  }


}