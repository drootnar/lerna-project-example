import config from '../src'

describe('config', () => {
  it('returns dict with config values', async () => {
    expect(config).toMatchSnapshot()
  })
})
