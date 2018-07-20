import logger, { LOG_LEVEL } from '../src/index'

describe('Logger', () => {
  it('is an object', async () => {
    expect(logger).toBeInstanceOf(Object)
  })
  it('is singleton', async () => {
    const secondLogger = require('../src/index').default
    expect(logger).toEqual(secondLogger)
  })
  describe('._setLogLevel', async () => {
    it('change _logLevel attribute', async () => {
      logger._setLogLevel(2)
      expect(logger._logLevel).toEqual(2)
      logger._setLogLevel(-1)
      expect(logger._logLevel).toEqual(-1)
    })
  })
  describe('._process', async () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation()
      logger._setLogLevel(2)
    })
    afterEach(() => {
      jest.clearAllMocks()
    })

    const payload = {}

    it('execute console.log when provided logLevel == set logLevel', async () => {
      logger._process(payload, 2)
      expect(console.log).toHaveBeenCalledWith(payload)
    })
    it('execute console.log when provided logLevel < set logLevel', async () => {
      logger._process(payload, 1)
      expect(console.log).toHaveBeenCalledWith(payload)
    })
    it('NOT execute console.log when provided logLevel < set logLevel', async () => {
      logger._process(payload, 3)
      expect(console.log).not.toHaveBeenCalled()
    })
  })

  it('checks rest methods', async () => {
    const payload = {}
    jest.spyOn(logger, '_process').mockImplementation()
    await logger.crash(payload)
    expect(logger._process).toHaveBeenCalledWith(payload, LOG_LEVEL['CRASH'])
    await logger.error(payload)
    expect(logger._process).toHaveBeenCalledWith(payload, LOG_LEVEL['ERROR'])
    await logger.warning(payload)
    expect(logger._process).toHaveBeenCalledWith(payload, LOG_LEVEL['WARNING'])
    await logger.info(payload)
    expect(logger._process).toHaveBeenCalledWith(payload, LOG_LEVEL['INFO'])
    await logger.debug(payload)
    expect(logger._process).toHaveBeenCalledWith(payload, LOG_LEVEL['DEBUG'])
    await logger.event(payload)
    expect(logger._process).toHaveBeenCalledWith(payload, LOG_LEVEL['EVENT'])
  })
})
