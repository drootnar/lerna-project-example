import config from '@lerna-pro/config'

export const LOG_LEVEL = {
  NONE: -1,
  EVENT: 0, // system event
  CRASH: 1, // application failure
  ERROR: 2, // recoverable error
  WARNING: 3, // something is wrong
  INFO: 4, // overall explanation of what's happening
  DEBUG: 5 // for use in development
}

class Logger {
  constructor() {
    this._setLogLevel(LOG_LEVEL[config.logLevel] || LOG_LEVEL.NONE)
  }

  _setLogLevel(logLevel) {
    this._logLevel = logLevel
  }

  async _process(payload, logLevel) {
    if (logLevel <= this._logLevel) {
      console.log(payload)
    }
  }

  async crash(payload) {
    this._process(payload, LOG_LEVEL['CRASH'])
  }
  async error(payload) {
    this._process(payload, LOG_LEVEL['ERROR'])
  }
  async warning(payload) {
    this._process(payload, LOG_LEVEL['WARNING'])
  }
  async info(payload) {
    this._process(payload, LOG_LEVEL['INFO'])
  }
  async debug(payload) {
    this._process(payload, LOG_LEVEL['DEBUG'])
  }
  async event(payload) {
    this._process(payload, LOG_LEVEL['EVENT'])
  }
}

const logger = new Logger()

export default logger
