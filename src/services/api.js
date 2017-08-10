import { callService, callMultipleServices } from './fetch';

export const login = (credentials) => {
  return callService('/example/login', 'POST', credentials)
   .then( json => json)
}

export const saveUser = (params) => {
  return callService('/example/user', 'POST', params)
   .then( json => json)
}

export const getData = (params) => {
  return callService('/example/user', 'GET')
   .then( json => json)
}

export const getMultipleData = () => {

  return callMultipleServices(
    [
      {
        url: '/example',
        key: 'example',
        method: 'GET'
      },
      {
        url: '/example2',
        key: 'example2',
        method: 'GET'
      },
      {
        url: '/example3',
        key: 'example3',
        method: 'GET'
      },
    ]
  )
  .then(json => json);
};
