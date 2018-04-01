const Expedition = require('./app')
const sample = require('./testSamples');

describe('Planet', () => {
  describe('when recieving new input', () => {
    let expedition
    beforeEach(()=> {
      expedition = new Expedition(sample.input)
    })

    it('should exist', () => {
      expect(expedition.planet).not.toBeFalsy();
    })

    it('should have a width', () => {
      expect(expedition.planet.maxX).not.toBeUndefined()
    })

    it('should have a height', () => {
      expect(expedition.planet.maxY).not.toBeUndefined()
    })

    it ('should give the planet an accurate size', () => {
      expect(expedition.planet).toMatchObject({maxX: 5, maxY: 3})
    })

  })
})
