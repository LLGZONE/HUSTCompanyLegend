export function urlParams(queryString) {
  const obj = queryString.substr(1).split('&').reduce((prev, next) => {
    const list = next.split('=')
    prev[list[0]] = list[1]
    return prev
  }, {})

  obj.get = function(key) {
    return this[key]
  }

  return obj
}