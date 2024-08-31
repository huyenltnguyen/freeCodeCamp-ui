import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { QuizQuestion } from "./quiz-question";
import { type QuizQuestionProps } from "./types";

const story = {
	title: "Components/QuizQuestion",
	component: QuizQuestion,
} satisfies Meta<typeof QuizQuestion>;

type Story = StoryObj<typeof QuizQuestion>;

type QuizQuestionCompProps = Pick<
	QuizQuestionProps,
	"question" | "options" | "disabled" | "validation"
>;

const QuizQuestionComp = ({
	question,
	options,
	disabled,
	validation,
}: QuizQuestionCompProps) => {
	const [value, setValue] = useState<QuizQuestionProps["selectedOption"]>();

	return (
		<QuizQuestion
			question={question}
			options={options}
			disabled={disabled}
			validation={validation}
			onChange={({ selectedOption }) => setValue(selectedOption)}
			selectedOption={value}
		/>
	);
};

export const Default: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		options: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
	},
};

export const Disabled: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		options: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		disabled: true,
	},
};

export const Correct: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		options: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		validation: { state: "correct", message: "Correct." },
	},
};

export const Incorrect: Story = {
	render: QuizQuestionComp,
	args: {
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		options: [
			{ label: "Option 1", value: 1 },
			{ label: "Option 2", value: 2 },
			{ label: "Option 3", value: 3 },
		],
		validation: { state: "incorrect", message: "Incorrect." },
	},
};

export default story;
