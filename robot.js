const getCoordinates = require('./helpers').getCoordinates

module.exports = class Robot {
  
  constructor(mission) {
    this.BEARINGS = ['N', 'E', 'S', 'W']
    this.commands = {
      'F': () => this.moveForward(),
    }
    this.position = this.determinePosition(mission.start)
    this.mission = mission.assignment.split('').filter(Boolean)
  }

  startMission(override) {
    const tasks = override || this.mission
    tasks.forEach(task => {
      if (Object.keys(this.commands).some(command => command === task)) {
        this.commands[task]();
      }
    })
  }
  
  moveForward() {
    let { orientation, x, y } = this.position

    switch (orientation) {
      case 'N':
        y++
        break;
      case 'E':
        x++
        break;
      case 'S':
        y--
        break;
      case 'W':
        x--
        break;
    }
    this.position = { orientation, x, y }
  }


  determinePosition(landingSite) {
    const orientations = landingSite.match(new RegExp(this.BEARINGS.join('|')))
    const orientation = orientations && orientations.pop()
    let coordinates = getCoordinates(landingSite.match(/\d+/g).map(Number))

    return Object.assign({}, coordinates, { orientation })
  }
}