import {Command, Flags} from '@oclif/core'
import {createStory} from '../../helpers/generate/story/generate-story'

export default class GenerateStory extends Command {
  static description = 'Generates a Storybook story using the custom-elements.json file.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = [{name: 'name', required: true, description: 'name of component'}]

  static flags = {
    fullBleed: Flags.boolean({char: 'f', description: 'removes padding in story canvas, useful for testing full bleed components'}),
    output: Flags.string({char: 'o', description: 'category for the story, defaults to the same path as the component'}),
    path: Flags.string({char: 'p', description: 'path to custom-elements.json. Defaults to \'../src/custom-elements.json\''}),
    category: Flags.string({char: 'c', description: 'category for the story', default: 'Content'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GenerateStory)
    createStory(args.name, flags.output, flags.path, flags.category)
    // if (args.name) {
    //   this.log(`name: ${args.name}`)
    // } else {
    //   this.error('Missing component name argument. try --help')
    // }
  }
}
