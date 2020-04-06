const map = require('./function-map')

var resolvef

const resolve = (fbody) => {
  const [ftoken, ...fparams] = fbody
  const functionTuple = map.find(entry => entry.token === ftoken)
  if (functionTuple) {
    const { f } = functionTuple
    return f({ fparams, resolve: resolvef })
  } else {
    throw Error('Undefined function found.')
  }
}

resolvef = resolve

module.exports = {
  resolve
}