/**
 * @class LocalStorageMock
 * @desc mocks localstorage in test
 */
class LocalStorageMock {
  /**
     * constructor
     * @desc constructor for LocalStorageMock class
     * @return {*} void
     */
  constructor() {
    this.store = {};
  }

  /**
     * getItem
     * @desc retrieve item from local storage
     * @param {String} key
     * @return {*} void
     */
  getItem(key) {
    return this.store[key] || null;
  }

  /**
     * setItem
     * @desc sets a local storage key to a value
     * @param {String} key
     * @param {String} value
     * @return {*} void
     */
  setItem(key, value) {
    this.store[key] = value.toString();
  }

  /**
     * removeItem
     * @desc removes stored value in local storage
     * @param {String} key
     * @return {*} void
     */
  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
