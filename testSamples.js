module.exports = {
  input: `
    5 3
    1 1 E
    RFRFRFRF
    3 2 N
    FRRFLLFFRRFLL
    0 3 W
    LLFFFLFLFL
  `,
  output: `
    1 1 E
    3 3 N LOST 
    2 3 S
  `
}