class Planet {
  constructor(maxX, maxY) {
    this.maxX = Number(maxX);
    this.maxY = Number(maxY);
    this.gridRows = []
    for(let i=0; i <= this.maxY; i++) {
      this.gridRows.push(new Array(this.maxX + 1))
    }
  }
}

module.exports = Planet