const Planet = require('./planet');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
describe('Planet', () => {
  describe('when recieving new input', () => {
    let input
    let planet
    beforeEach(()=> {
      input = `
        53
        11E RFRFRFRF
        32N FRRFLLFFRRFLL
        03W LLFFFLFLFL
      `
      planet = new Planet(input)
    })

    it('should exist', () => {
      expect(planet).not.toBeFalsy();
    })

    it('should have a width', () => {
      expect(planet.width).not.toBeUndefined()
    })

    it('should have a height', () => {
      expect(planet.height).not.toBeUndefined()
    })

  })
})