class Planet {
  constructor(maxX, maxY) {
    maxX = Number(maxX);
    maxY = Number(maxY);
    this.gridRows = []
    for(let i=0; i <= maxY; i++) {
      this.gridRows.push(new Array(maxX + 1))
    }
    this.width = this.getWidth()
    this.height = this.getHeight()
  }

  getWidth() {
    let width = 0
    this.gridRows.forEach(row => { 
      if (row.length > width) width = row.length 
    })
    return width
  }

  getHeight() {
    return this.gridRows.length
  }
}

module.exports = Planet