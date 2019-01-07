const { flags } = require('@oclif/command')

const networkConstants = {
  mainnet: {
    id: 1,
    url: 'https://mainnet.infura.io',
    label: 'Mainnet'
  },
  ropsten: {
    id: 3,
    url: 'https://ropsten.infura.io',
    label: 'Ropsten'
  },
  rinkeby: {
    id: 4,
    url: 'https://rinkeby.infura.io',
    label: 'Rinkeby'
  },
  rsk: {
    id: 30,
    url: 'https://public-node.rsk.co',
    label: 'RSK'
  },
  'rsk-testnet': {
    id: 31,
    url: 'https://public-node.testnet.rsk.co',
    label: 'RSK testnet'
  },
  kovan: {
    id: 42,
    url: 'https://kovan.infura.io',
    label: 'Kovan'
  },
  sokol: {
    id: 77,
    url: 'https://sokol.poa.network',
    label: 'Sokol'
  },
  poa: {
    id: 99,
    url: 'https://core.poa.network',
    label: 'POA'
  },
  xdai: {
    id: 100,
    url: 'https://dai.poa.network',
    label: 'xDAI'
  }
}

const networkDefaultUrl = 'http://localhost:8545'

const getNetworkFlags = () => {
  // register a flag for localhost
  const defaultUrl = networkDefaultUrl
  const networkConstantsKeys = Object.keys(networkConstants)

  let flagsToAdd = {
    url: flags.string({
      required: false,
      description: 'URL of the ethereum node to connect.',
      default: defaultUrl,
      multiple: false
    })
  }

  // register a flag for each known network
  networkConstantsKeys.forEach(network => {
    const { label } = networkConstants[network]
    const networks = networkConstantsKeys.filter(key => key !== network)

    flagsToAdd[network] = flags.boolean({
      required: false,
      description: `Connect to ${label} network`,
      multiple: false,
      exclusive: [...networks]
    })
  })

  return flagsToAdd
}

module.exports = {
  networkConstants: networkConstants,
  getNetworkFlags: getNetworkFlags,
  networkDefaultUrl: networkDefaultUrl
}
