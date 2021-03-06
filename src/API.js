import { NativeEventEmitter, NativeModules } from 'react-native';
import SerialPort from './SerialPort';

const { SerialPortAPI } = NativeModules;
const eventEmitter = new NativeEventEmitter(SerialPortAPI);

export default class API {
  /**
   * @callback stringArrayCallback
   * @param {Array<string>} values
   */

  /**
   * @callback stringCallback
   * @param {string} value
   */


  /**
   * @typedef {Object} openOptions
   * @property {number} baudRate such as 9600
   * @property {number} [parity=0] 0: none, 1: odd, 2: even
   * @property {number} [dataBits=8] 5~8
   * @property {number} [stopBits=1] 1 or 2
   */

  /**
   * Get serial port device names
   * @param {stringArrayCallback} callback
   */
  static deviceNames(callback) {
    SerialPortAPI.deviceNames(callback);
  }

  /**
   * Get serial port device paths
   * @param {stringArrayCallback} callback
   */
  static devicePaths(callback) {
    SerialPortAPI.devicePaths(callback);
  }

  /**
   * set su binary path
   * @param {string} suPath
   */
  static setSuPath(suPath) {
    SerialPortAPI.setSuPath(subPath);
  }

  /**
   * get su binary path
   * @param {stringCallback} callback
   */
  static getSubPath(callback) {
    SerialPortAPI.getSuPath(callback)
  }

  /**
   * Open serial port
   * @param {string} devicePath device path
   * @param {openOptions} options
   * @returns {Promise<SerialPort>} connected serial port
   */
  static open(devicePath, {baudRate, parity = 0, dataBits = 8, stopBits = 1}) {
    return SerialPortAPI.open(devicePath, baudRate, parity, dataBits, stopBits)
      .then(serialPort => {
        return Promise.resolve(new SerialPort(serialPort, eventEmitter));
      })
  }
}
