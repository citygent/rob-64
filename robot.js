import { getCoordinates } from './helpers'

export class Robot {
  
  constructor(mission) {
    this.COMMANDS = ['F', 'L', 'R']
    this.BEARINGS = ['N', 'E', 'S', 'W']
    this.position = this.determinePosition(mission.start)
    this.mission = mission.assignment.split('').filter(Boolean)
  }

  // This is clearly the class we should have started with.
  
  // Try to stick with ES6 instead of RX and use Generators and Iterators to get a robot
  // to perform its mission in order to get expedition to wait for a robot to complete
  // its missions one way or another before sending off another robot.

  // Would also like to set up some kind of behaviour subject for Scents and other robots
  // so that a robot has somewhere to check if the next square she moves into is either offworld
  // or another robot she is gonna crash into.

  *startMission(mission = this.mission) {
    mission.forEach(command => {
      if (this.COMMANDS.some(cmd => cmd === command.toUpperCase())) {
        yield executeCommand(command)
      }
    })
  }

  determinePosition(landingSite) {
    const orientations = landingSite.match(new RegExp(this.BEARINGS.join('|')))
    const orientation = orientations && orientations.pop()
    let coordinates = getCoordinates(landingSite.match(/\d+/g).map(Number))

    return Object.assign({}, coordinates, { orientation })
  }
}