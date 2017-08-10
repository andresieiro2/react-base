import * as config from './../../config/application.config';

export const callMultipleServices = (servicesUrls) => {
  const promisses = [];

  for (var i = 0 ; i < servicesUrls.length ; i++  ) {
    let service = servicesUrls[i];
    promisses[i] = new Promise( (resolve, reject ) => {
      callService(service.url, service.method )
      .then( (json) => {
        const jsonReturn = {}
        jsonReturn.result = json;
        jsonReturn.key = service.key;
        resolve({ ...jsonReturn })
      });
    })
  };

  return Promise.all(promisses)
  .then(json  => {
    let selectsData = {};
    for (var i = 0; i < json.length; i++) {
      selectsData[json[i].key] = json[i].result;
    }
    return selectsData;
  })
}

export const callService = (url, method, params) => {
  const configHeaders = {
   method: method,
   headers: {
     'Content-Type': 'application/json',
      Accept: 'application/json',
   },
  };

  method === 'POST' ? configHeaders.body = JSON.stringify(params) : null ;

  return new Promise( (resolve, reject) => {
    return fetch( config.endpoint + url, configHeaders )
     .then(response => resolve(response.json()))
     .catch(message => reject(message) );
  });
}
