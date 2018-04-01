module.exports = class Robot {
  
  constructor(mission) {
    this.commands = {
      'F': () => this.moveForward(),
      'L': () => this.turnLeft(),
      'R': () => this.turnRight()
    }
    this.position = this.determinePosition(mission.start)
    this.mission = mission.assignment.split('').filter(Boolean)
    this.terrain = mission.terrain
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
    let { orientation, x, y, lost } = this.position
    const lostV = (vc) => (vc < 0 || vc > this.terrain.maxY)
    const lostH = (hc) => (hc < 0 || hc > this.terrain.maxX)

    if (!lost) {
      switch (orientation) {
        case 'N':
          if (! lostV(y + 1)) {
            y++
          } else {
            lost = true
          }
          break;
        case 'E':
          if (! lostH(x + 1)) {
            x++
          } else {
            lost = true
          }
          break;
        case 'S':
          if (! lostV(y - 1)) { 
            y--
          } else {
            lost = true
          }
          break;
        case 'W':
          if (! lostH(x - 1)) {
            x--
          } else {
            lost = true
          }
          break;
      }
    }
    this.position = { orientation, x, y, lost }
  }

  turnLeft() {
    const leftMap = {
      'N': 'W',
      'E': 'N',
      'S': 'E',
      'W': 'S',
    }
    this.position.orientation = leftMap[this.position.orientation]
  }

  turnRight() {
    const rightMap = {
      'N': 'E',
      'E': 'S',
      'S': 'W',
      'W': 'N'
    }
    this.position.orientation = rightMap[this.position.orientation]
  }

  determinePosition(positionString) {
    const validBearings = ['N', 'E', 'S', 'W']
    const [ x, y, orientation ] = positionString.split(' ').map(ct => Number(ct) || (validBearings.indexOf(ct) !== -1 ? ct : null) )
    return { x, y, orientation }
  }
}