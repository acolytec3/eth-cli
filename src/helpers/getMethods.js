const sha3 = require('ethereumjs-util').sha3
const { loadABI, extractMethodObjectsFromABI } = require('./utils')

module.exports = function(abiPath) {
  let abi = loadABI(abiPath)

  const methods = extractMethodObjectsFromABI(abi).map(({ name, inputs }) => {
    const params = inputs.map(x => x.type).join(',')
    const signature = `${name}(${params})`
    const signatureHash = sha3(signature)
      .toString('hex')
      .slice(0, 8)

    return { signature, signatureHash }
  })

  return methods
}
