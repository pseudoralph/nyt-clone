export class FindIP {
  getLatLong() {
    return new Promise( (resolve, reject) => {
      const request = new XMLHttpRequest();
      const apiKey = '3d543986f94c7663da4080a326c176c0';
      const url = `http://api.ipstack.com/check?access_key=${apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          
          const rawData = {
            lat: JSON.parse(request.response)["latitude"],
            long: JSON.parse(request.response)["longitude"],
            payload: JSON.parse(request.response)
          }
          resolve(JSON.parse(request.response));

        } else { reject(Error(request.statusText)) }
      }

      request.open('GET', url);
      request.send();

    });
  }

}