const Expedition = require('./app')
const sample = require('./testSamples');

describe('Expedition', () => {
  describe('when recieving new input', () => {
    let expedition
    beforeEach(()=> {
      expedition = new Expedition(sample.input);
    })

    it('should exist', () => {
      expect(expedition).not.toBeFalsy();
    })

    it ('should parse expedition intructions', () => {
      expect(expedition.instructions.length).toEqual(7)
      expect(expedition.instructions).toContain('5 3')
      expect(expedition.instructions).toContain('1 1 E')
      expect(expedition.instructions).toContain('0 3 W')
      expect(expedition.instructions).toContain('RFRFRFRF')
      expect(expedition.instructions).not.toContain('LLFRFFLFLFLLR')
    })

    it('should parse planet information', () => {
      expect(expedition.planet).toBeDefined();
    })

    it('should have the correct amount of robot tasks', () => {
      expect(expedition.tasks.length).toEqual(3);
    })
  })
})
