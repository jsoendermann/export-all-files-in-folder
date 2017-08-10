describe('export-all-files-in-folder', () => {
  it('should import modules', () => {
    const obj = require('./tests/test1')

    expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should throw when a key gets exported twice', () => {
    expect(() => require('./tests/test2')).toThrow()
  })
})
