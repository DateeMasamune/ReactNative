import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#171717'
	},
};

export const stylesMainContainer = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#171717',
	},
});