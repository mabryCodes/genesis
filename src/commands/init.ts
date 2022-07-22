import {Command} from '@oclif/core'
import { outputFileSync } from 'fs-extra'
import configTemplate from '../templates/init/config-template'

export default class Init extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}


  public async run(): Promise<void> {
    outputFileSync(process.cwd() + '/.genesis.json', configTemplate)
  }
}
