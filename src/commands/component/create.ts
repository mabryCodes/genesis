import {Command, Flags} from '@oclif/core'
import {createComponent} from '../../scripts/component/create/create-component'
// import { analyzeComponent } from '../../scripts/component/helpers'
export default class ComponentCreate extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = [{name: 'name', required: true, description: 'name of component'}]

  static flags = {
    output: Flags.string({char: 'o', description: 'category for the story, defaults to the same path as the component'}),
    path: Flags.string({char: 'p', description: 'path to custom-elements.json'}),
    baseClass: Flags.string({char: 'b', description: 'name of base class'}),
    directory: Flags.string({char: 'd', description: 'directory for the component. defaults to the base name used for the component'}),
    test: Flags.boolean({char: 't', description: 'create a test file for the component'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ComponentCreate)
    this.log(`creating component ${args.name}`)
    createComponent(args, flags)
    this.log('component created')
  }
}
