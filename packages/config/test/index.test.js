import config from '../src'

describe('config', () => {
  it('returns dict with config values', async () => {
    expect(typeof config.logLevel).toBe('string')
    expect(config.api).toMatchSnapshot()
  })
})
