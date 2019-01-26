export class LocalizedTemp {
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

}