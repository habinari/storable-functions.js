module.exports = ({ fparams, resolve }, args) => {
  const [argName, lambda, params] = fparams
  const solvedParams = resolve(params, args)
  return solvedParams.filter(param => {
    args[argName] = param
    const res = resolve(lambda, args)
    delete args[argName]
    return res
  })
}
