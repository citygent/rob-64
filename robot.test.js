const Expedition = require('./app');
const Robot = require('./robot');
const sample = require('./testSamples');

describe('Robot', () => {
  describe('when recieving new input', () => {
    let expedition, robot
    beforeEach(()=> {
      expedition = new Expedition(sample.input)
      robot = new Robot(expedition.robotMissions[0])
    })

    it('should exist', () => {
      expect(robot).not.toBeFalsy();
    })

    it('should know where it landed', () => {
      expect(robot.position).toMatchObject({'x': 1, 'y': 1})
    })

    it('should know its orientation', () => {
      expect(robot.position).toMatchObject({'orientation': 'E'})
    })

    it('should know what it has to do', () => {
      expect(robot.mission).not.toBeUndefined()
    })
  })

  describe('movement capabilities', () => {
    let expedition, robot
    beforeEach(()=> {
      expedition = new Expedition(sample.input)
      robot = new Robot(expedition.robotMissions[1])
    })

    it('should know how to move forward', () => {
      robot.startMission(['F'])
      expect(robot.position).toMatchObject({'x':3, 'y':3, 'orientation': 'N'})
    })

    it('should know how to turn left', () => {
      robot.startMission(['L'])
      expect(robot.position).toMatchObject({'x':3, 'y':2, 'orientation': 'W'})
      robot.turnLeft()
      expect(robot.position).toMatchObject({'x':3, 'y':2, 'orientation': 'S'})
    })

    it('should know how to turn right', () => {
      robot.startMission(['R'])
      expect(robot.position).toMatchObject({'x':3, 'y':2, 'orientation': 'E'})
      robot.turnRight()
      robot.turnRight()
      robot.turnRight()
      expect(robot.position).toMatchObject({'x':3, 'y':2, 'orientation': 'N'})
    })

    it('should be able to follow a sequence of commands', () => {
      robot = new Robot(expedition.robotMissions[0])
      expect(robot.position).toMatchObject(
        { x: 1, y: 1, orientation: "E" }
      )
    })

  })
})