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
    this.lastPosition = this.position
  }

  startMission(override) {
    const tasks = override || this.mission

    for(const task of tasks) {
      const validCommand = Object.keys(this.commands).some(command => command === task)
      if (validCommand) {
        this.commands[task]()
        if (this.robotOnTerrain(this.position)) {
          this.lastPosition = this.position
          continue;
        } else {
          this.lastPosition.lost = true
          this.position.lost = true
          // still convinced marking robots position as somewhere they were _before_ they got lost is a bit silly.
          // but I guess this is why I'm not working at NASA or SpaceX ;_;
          this.terrain.markScent(this.lastPosition)
        }
      }
    }
    this.output = `${this.lastPosition.x} ${this.lastPosition.y} ${this.lastPosition.orientation} ${this.position.lost ? 'LOST' : ''}`.trim();
  }

  moveForward() {
    let { orientation, x, y, lost } = this.position
    let obstacle = this.terrain.obstacles.find(obs => 
      obs.orientation === orientation &&
      obs.x === x && 
      obs.y === y
    )
    
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
    if (!obstacle) {
      this.position = { orientation, x, y, lost }
    }
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
    const [ x, y, orientation ] = positionString.split(' ').map(ct => validBearings.indexOf(ct) !== -1 ? ct : Number(ct))
    return { x, y, orientation }
  }

  robotOnTerrain({x, y}) {
    const lostVertically = (y < 0 || y > this.terrain.maxY)
    const lostHorizontally = (x < 0 || x > this.terrain.maxX)

    return (!lostVertically && !lostHorizontally)
  }

}