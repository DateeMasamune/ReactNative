import { StyleSheet } from "react-native";

export const bottomMenu = StyleSheet.create({
	menu: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 82,
		backgroundColor: 'linear-gradient(266.08deg, rgba(23, 23, 23, 0.39) -22.66%, rgba(23, 23, 23, 0.46) 201.16%)',
		position: 'fixed',
		bottom: 0,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		width: '100vw'
	},
	homeIcon:{
		height: 20,
		width: 20,
	},
	chartIcon:{
		height: 20,
		width: 20,
	},
	chatIcon:{
		height: 20,
		width: 20,
	},
	settingIcon:{
		height: 20,
		width: 20,
	}
})