import { environment } from 'src/environments/environment';

export class FindLocation {
  getLatLong() {
    return new Promise( (resolve, reject) => {
      const request = new XMLHttpRequest();
      
      const apiKey = environment.api.geo;
      const url = `http://api.ipstack.com/check?access_key=${apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(JSON.parse(request.response));
        } else { reject(Error(request.statusText)) }
      }

      request.open('GET', url);
      request.send();

    });
  }

}