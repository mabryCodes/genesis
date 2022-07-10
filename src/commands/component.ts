import {Command, Flags} from '@oclif/core'
import {createComponent} from '../scripts/component/generate-component'
export default class GenerateComponent extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = [{name: 'name', required: true, description: 'name of component'}]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    baseClass: Flags.string({char: 'b', description: 'name of base class to inherit from', default: 'LitElement'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    nameSpace: Flags.string({char: 'n', description: 'name space for the component. defaults to the base name used for the component'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GenerateComponent)
    createComponent(args.name, flags.baseClass)
  }
}
