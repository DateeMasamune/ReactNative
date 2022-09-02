import { StyleSheet } from 'react-native';

export const ButtonTouchableStyle = StyleSheet.create({
	button: {
		marginTop: 7,
		borderRadius: 16,
		height: 56,
		width: 156,
		backgroundColor: '#444444',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	buttonText: {
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium'
	},
	buttonImg: {
		height: 16,
		width: 15,
		marginRight: 10
	}
})