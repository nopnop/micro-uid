module.exports = function (size) {
  // Return a pseudo-random value: 0-9a-zA-Z
  function rand62() {
    return 0 ^ Math.random() * 2 ?
      (0 ^ Math.random() * 36).toString(36)
    : (0 ^ Math.random() * 25 + 10).toString(36).toUpperCase()
  }
  return Array.apply(null,Array(size||8)).map(rand62).join('')
}
