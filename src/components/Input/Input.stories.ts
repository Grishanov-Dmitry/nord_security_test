import type { Meta, StoryObj } from "@storybook/react";
import '../../index.css';

import { Input } from ".";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: () => {},
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dafault: Story = {
  args: {
    value: "Login value",
    placeholder: 'Type a value'
  },
};
