module.exports = {
  getCoordinates([ x, y ]) {
    const MAX_COORDINATE = 50
    const validCoordinate = (coordinate) => (coordinate <= MAX_COORDINATE)
    // "The maximum value for any coordinate is 50".

    if ( validCoordinate(x) && validCoordinate(y) ) {
      return { x, y }
    }
  }

}
