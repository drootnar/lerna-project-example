import logger from '../src/index'

describe('logger', () => {
  it('temp test', async () => {
    expect(logger).toMatchSnapshot()
  })
})
