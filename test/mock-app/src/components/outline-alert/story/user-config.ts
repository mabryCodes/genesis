// <!-- AUTOGENERATED CONTENT START -->
//
//  Available config.args: 
//  statusType: "info" | "success" | "warning" | "error",
//  size: "large" | "medium" | "small",
//  isInteractive: boolean,
//  shouldShowIcon: boolean,
//  defaultSlot: string, 
//  headerSlot: string,
//  
//  == Storybook Args (not used by component) == 
//  markup: string - This is what renders inside of the component. 
//
// <!-- AUTOGENERATED CONTENT END -->

export const userConfig =  {
  title: "Content/Decoupled Outline Alert",
  component: 'outline-alert',
  argTypes: {
    // you can override argTypes here
    // statusType :{
    //   control: {
    //     type: 'select',
    //     options: ['nothing']
    //   },
    // }
  },
  args: {
    statusType: "info",
    size: "large",
    isInteractive: false,
    shouldShowIcon: true, 
    defaultSlot: `Enter slot content here`,
    headerSlot: `Enter slot content here`,
    story: `
    <h3 slot="header">Header Slot</h3>
    <p>This is the default slot for the component.</p>
    `
  },
  parameters: {
    docs: {
      // figure out what the hell this thing does
      description: {
        component: ``,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<outline-alert
  status-type=""
  size=""
  should-show-icon
  is-interactive
>
  <span slot="outline-alert--header">{{ headerSlot }}</span>
  {{ defaultSlot }}
</outline-alert>
        `,
      },
    },
  },
};