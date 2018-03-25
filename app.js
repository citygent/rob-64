import Planet from './Planet'

export class Expedition {
  // Making some assumptions about how we recieve input so we don't spend 3 hours writing a parser.
  constructor(input) {
    this.instructions = this.getInstructions(input);
    this.planet = this.getPlanet(this.instructions);
  }

  getInstructions(input) {
    let instructions
    if (input && input.length) {
      instructions = input.match(/[^\r\n]+/g) // Treat each line as new instruction.
                          .map(instruction => instruction.trim())
                          .filter(Boolean)
    }
    console.log(instructions)
    return instructions
  }

  getPlanet(instructions) {
    const planetInfo = instructions && instructions.length && instructions[0]
    const MAX_COORDINATE = 50
    const validCoordinate = (coordinate) => (coordinate <= MAX_COORDINATE)
    let maxX, maxY
    // "The maximum value for any coordinate is 50".
    // So we'll have to make some assumptions on how to split a planet instruction like 341 (3,41/34,1).
    // Unless we assume that the sample input is supposed to have whitespace between x and y?
    if (planetInfo && planetInfo.length === 2) {
      maxX = planetInfo[0]
      maxY = planetInfo[1]
    } else if (planetInfo && planetInfo.length < 4) {
      let chunks = planetInfo.match(/.{1,2}/g);
      if (validCoordinate(chunks[0]) && validCoordinate(chunks[1])) {
        maxX = chunks[0]
        maxY = chunks[1]
      } else if (!widthValid && planetInfo.length === 3) {
        maxX = planetInfo[0]
        maxY = validCoordinate(planetInfo[1] + planetInfo[2]) ? planetInfo[1] + planetInfo[2] : null
      }
    }
    return validCoordinate(maxX) && validCoordinate(maxY) ? new Planet(maxX, maxY) : null
  }

}

