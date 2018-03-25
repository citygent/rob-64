import { Expedition } from './app';

describe('Planet', () => {
  describe('when recieving new input', () => {
    let input
    let expedition
    beforeEach(()=> {
      input = `
        53
        11E RFRFRFRF
        32N FRRFLLFFRRFLL
        03W LLFFFLFLFL
      `
      expedition = new Expedition(input)
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
