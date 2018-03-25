import { Expedition } from './app'

describe('Expedition', () => {
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
      expedition = new Expedition(input);
    })

    it('should exist', () => {
      expect(expedition).not.toBeFalsy();
    })

    it('should parse planet information', () => {
      expect(expedition.planet).toBeDefined();
    })
  })
})
