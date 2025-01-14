import { Command, flags } from '@oclif/command'
import { cli } from 'cli-ux'

import { getAbiByName } from '../../helpers/knownAbis'

export default class ShowCommand extends Command {
  static description = 'Displays a known ABI (ERC20, ERC721)'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    {
      name: 'abi',
      required: true,
      description: 'The contract name.',
    },
  ]

  static examples = ['eth abi:show ERC20', 'eth abi:show ERC721']

  async run() {
    const { args } = this.parse(ShowCommand)
    const { abi } = args
    const abiObj = getAbiByName(abi)
    if (abiObj) {
      cli.styledJSON(abiObj)
    } else {
      this.error(`ABI for ${abi} not found!`)
    }
  }
}
