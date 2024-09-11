import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { TreeView } from "./tree-view";

const story = {
	title: "Components/TreeView",
	component: TreeView,
} satisfies Meta<typeof TreeView>;

type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
	args: {
		data: {
			id: "root",
			label: "Parent",
			children: [
				{
					id: "1",
					label: "Child - 1",
				},
				// {
				// 	id: "2",
				// 	name: <p>Foo</p>,
				// },
				// {
				// 	id: "3",
				// 	name: "Child - 3",
				// 	children: [
				// 		{
				// 			id: "4",
				// 			name: "Child - 4",
				// 		},
				// 	],
				// },
			],
		},
	},
};

export default story;
