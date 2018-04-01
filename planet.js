class Planet {
  constructor(maxX, maxY) {
    this.maxX = Number(maxX);
    this.maxY = Number(maxY);
    this.obstacles = []
    this.gridRows = []
    for(let i=0; i <= this.maxY; i++) {
      this.gridRows.push(new Array(this.maxX + 1))
    }
  }

  markScent({ x, y, orientation }) {
    this.gridRows[x][y] = { lost: true, direction: orientation }
    this.obstacles.push(
      { x, y, orientation }
    )
  }
}

module.exports = Planet