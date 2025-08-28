import { create } from "@storybook/theming";

export const preferDark = window.matchMedia(
	"(prefers-color-scheme: dark)",
).matches;

export const lightTheme = create({
	base: "light",
	brandTitle: "freeCodeCamp.org",
	brandImage:
		"https://cdn.freecodecamp.org/platform/universal/fcc_secondary.svg",
});

export const darkTheme = create({
	base: "dark",
	brandTitle: "freeCodeCamp.org",
	brandImage: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
});
