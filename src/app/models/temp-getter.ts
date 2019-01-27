import { environment } from 'src/environments/environment';

export class LocalizedTemp {
  getLocalWeather(locationObject) {
    return new Promise( (resolve, reject) => {
      const request = new XMLHttpRequest();

      const apiKey = environment["api"].weather;
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

}