
import config, {Template} from './generated/config'

//** TODO: Create story:variant command to build these files */
export const OutlineAlertVariant = Template.bind({});
// @TODO: Figure out why this .args is throwing a type error
// eslint-disable-next-line
// @ts-ignore
OutlineAlertVariant.args = {
  // Add your arg and story overrides here
  // statusType: 'success',
  // story: '<p>This is a success alert.</p>',
}

// Need to re-export the config for storybook
export default config
