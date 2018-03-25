import { Expedition } from './app';
import { sample } from './testSamples'

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
      expect(expedition.planet.width).not.toBeUndefined()
    })

    it('should have a height', () => {
      expect(expedition.planet.height).not.toBeUndefined()
    })

    it ('should give the planet an accurate size', () => {
      expect(expedition.planet).toMatchObject({width: 6, height: 4})
    })

  })
})
