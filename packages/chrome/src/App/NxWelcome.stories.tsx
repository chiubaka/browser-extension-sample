import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { NxWelcome } from "./NxWelcome";

const Story: ComponentMeta<typeof NxWelcome> = {
  component: NxWelcome,
  title: "NxWelcome",
};
export default Story;

const Template: ComponentStory<typeof NxWelcome> = (args) => (
  <NxWelcome {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
