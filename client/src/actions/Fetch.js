import 'cross-fetch/polyfill';

/**
 * Fetch API
*/
export default class Fetch {
  /**
     * Fetch method
     * @param {String} url
     * @param {String} method
     * @param {Object} data
     * @param {Object} headers
     *
     * @returns {Promise} response
     */
  static commonFetch(url, method, data, headers) {
    let defaultHeader = { 'Content-Type': 'application/json' };
    let options;
    if (headers) {
      defaultHeader = Object.assign(defaultHeader, headers);
    }
    if (data) {
      options = { method, headers: defaultHeader, body: JSON.stringify(data) };
    } else {
      options = { method, headers: defaultHeader };
    }
    if (data instanceof FormData) {
      options = { method, body: data };
    }

    return fetch(url, options)
      .then(response => response.json());
  }

  /**
   * Get method
   * @param {String} url
   * @param {Object} headers
   *
   * @returns {Promise} response
   */
  static get(url, headers) {
    return this.commonFetch(url, 'get', null, headers);
  }

  /**
   * post method
   * @param {String} url
   * @param {Object} data
   * @param {Object} headers
   *
   * @returns {Promise} response
   */
  static post(url, data, headers) {
    return this.commonFetch(url, 'post', data, headers);
  }

  /**
   * put method
   * @param {String} url
   * @param {Object} data
   * @param {Object} headers
   *
   * @returns {Promise} response
   */
  static put(url, data, headers) {
    return this.commonFetch(url, 'put', data, headers);
  }

  /**
   * delete method
   * @param {String} url
   * @param {Object} headers
   *
   * @returns {Promise} response
   */
  static del(url, headers) {
    return this.commonFetch(url, 'delete', null, headers);
  }
}
