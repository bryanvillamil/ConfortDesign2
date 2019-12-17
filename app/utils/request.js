import 'whatwg-fetch';
import config from '../config';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const requestParams = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': options.lang || 'en',
    },
    method: options.method || 'GET',
    body: options.body || undefined,
  };

  if (options.noContentType) {
    delete requestParams.headers['Content-Type'];
  }

  // if (options.token) {
  //   requestParams.headers.Authorization = `Bearer ${options.token}`;
  // }

  const endPoint = `${config.api.url}${url}`; //eslint-disable-line
  return fetch(endPoint, requestParams)
    .then(response => (response.status !== 204 ? response.json() : {}))
    .then(responseJson => responseJson)
    .catch(error => {
      const errorMsg =
        options.lang && options.lang === 'es'
          ? 'Lo sentimos, estamos teniendo problemas técnicos.'
          : 'Sorry, We are having technical problems.';
      throw new Error(`${errorMsg} [${error.message}]`);
    });
}
