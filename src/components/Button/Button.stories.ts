import type { Meta, StoryObj } from "@storybook/react";
import '../../index.css';

import { Button } from ".";
import { ButtonSizes } from "../../types";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    size: ButtonSizes,
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dafault: Story = {
  args: {
    label: "Button",
    onClick: () => {},
  },
};

export const Large: Story = {
  args: {
    size: ButtonSizes.large,
    label: "Large Button",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Button",
  },
};

export const Small: Story = {
  args: {
    size: ButtonSizes.small,
    label: "Small Button",
  },
};
