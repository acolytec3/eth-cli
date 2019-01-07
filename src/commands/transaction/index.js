const { Command } = require('@oclif/command')
const { isEmptyCommand } = require('../../helpers/checkCommandInputs')

class TxCommand extends Command {
  async run() {
    const { args, flags } = this.parse(TxCommand)

    // Show help on empty sub command
    if (isEmptyCommand(flags, args)) {
      this._help()
    }
  }
}

TxCommand.aliases = ['tx']

TxCommand.description = `Allows actions with transactions.`

TxCommand.examples = [
  'eth transaction:get --ropsten 51eaf04f9dbbc1417dc97e789edd0c37ecda88bac490434e367ea81b71b7b015',
  'eth transaction:nop 3daa79a26454a5528a3523f9e6345efdbd636e63f8c24a835204e6ccb5c88f9e'
]

module.exports = TxCommand
