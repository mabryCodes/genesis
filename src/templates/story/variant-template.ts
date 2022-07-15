export default`
import config, {Template} from './generated/config'

//** TODO: Create story:variant command to build these files */
export const ComponentNameVariant = Template.bind({});
// @TODO: Figure out why this .args is throwing a type error
// eslint-disable-next-line
// @ts-ignore
ComponentNameVariant.args = {
  // Add your arg and story overrides here
  // statusType: 'success',
  // story: '<p>This is a success alert.</p>',
}

// Need to re-export the config for storybook
export default config


`