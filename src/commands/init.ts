import {Command} from '@oclif/core'
import { outputFileSync } from 'fs-extra'
import configTemplate from '../templates/init/config-template'

export default class Init extends Command {
  static description = 'Initializes a config file at the root of the current directory'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    outputFileSync(process.cwd() + '/.genesis.json', configTemplate)
  }
}
