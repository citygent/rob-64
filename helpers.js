export function getCoordinates(numberArray) {
  const MAX_COORDINATE = 50
  const validCoordinate = (coordinate) => (coordinate <= MAX_COORDINATE)
  // "The maximum value for any coordinate is 50".
  // So we'll have to make some assumptions on how to split a planet instruction like '341' => (3,41 or 34,1).
  // Unless we assume that the sample input is supposed to have whitespace between x and y? Probably.
  // In the real world I'd politely ask this thirdparty/provider/client to make this less ambiguous before 
  // parsing on a vague thing, so will use creative license to imagine the PDF is displaying how they 
  // should be typed in even if it's using kerning to show whitespace instead of actual whitespace.
  let [ x, y ] = numberArray
  if ( validCoordinate(x) && validCoordinate(y) ) {
    return { x, y }
  }
}