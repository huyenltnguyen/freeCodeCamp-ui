import { addons } from "@storybook/manager-api";
import { preferDark, lightTheme, darkTheme } from "./theme";

addons.setConfig({
	theme: preferDark ? darkTheme : lightTheme,
});
