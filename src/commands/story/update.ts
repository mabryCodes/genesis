import {Command, Flags} from '@oclif/core'
import path = require('path')
import {updateStory} from '../../scripts/story/update/update-story'

export default class StoryUpdate extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = [{name: 'name', required: true, description: 'name of component'}]

  static flags = {
    fullBleed: Flags.boolean({char: 'f', description: 'allow the component to expand to the full width and height of the Storybook Canvas'}),
    output: Flags.string({char: 'o', description: 'category for the story, defaults to the same path as the component'}),
    customElementsPath: Flags.string({char: 'p', description: 'path to custom-elements.json. overrides config setting'}),
    storyPath: Flags.string({char: 's', description: 'path to components story file. \n overrides config setting \n defaults to same folder as component'}),
    category: Flags.string({char: 'c', description: 'category for the story', default: 'Content'},
    ),
    defaultDirectory: Flags.string({char: 'd', description: 'Default directory for the component. defaults to the base name used for the component'}),
    test: Flags.boolean({char: 't', description: 'create a test file for the component story'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(StoryUpdate)

    const currDir = process.cwd()
    const configPath = path.resolve(currDir, '.genesis.json')

    import(`${configPath}`)
    .then((config: any) => {
      updateStory(args, flags)
    })
    .catch(error => {
      console.error(error)
    })
  }
}
