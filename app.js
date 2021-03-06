const Planet = require('./Planet')
const getCoordinates = require('./helpers').getCoordinates

module.exports = class Expedition {
  constructor(input) {
    this.instructions = this.getInstructions(input);
    this.planet = this.getPlanet(this.instructions);
    this.robotMissions = this.getMissions(this.instructions);
  }

  getInstructions(input) {
    let instructions
    if (input && input.length) {
      instructions = input.match(/[^\r\n]+/g) // Treat each line as new instruction.
                          .map(instruction => instruction.trim())
                          .filter(Boolean)
    }
    return instructions
  }

  getPlanet(instructions) {
    const planetInfo = instructions && instructions.length && instructions[0]
    let { x: maxX, y: maxY } = getCoordinates(planetInfo.split(' '))

    return new Planet(maxX, maxY)
  }

  getMissions(instructions) {
    return instructions.slice(1).reduce((accumulator, value, index, array) => {
      if (index % 2 === 0)
        accumulator.push(array.slice(index, index + 2));
      return accumulator;
    }, []).map(arr => (
      { 
        terrain: this.planet,
        start: arr[0], 
        assignment: arr[1]
      }
    ))
  }
}
