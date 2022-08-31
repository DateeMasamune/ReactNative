import {StyleSheet} from 'react-native';

export const OneStyle = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 28,
		marginRight: 24,
		marginLeft: 24,
	},
	title: {
		color: '#FFFFFF',
		marginRight: 100,
		fontFamily: 'Inter-Bold',
		fontSize: 22,
		lineHeight: 22
	},
	portfolio: {
		alignItems: 'center',
		marginTop: 32,
	},
	buttonsBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 24,
		paddingRight: 24
		// marginBottom: 230,
		// marginRight: 24,
		// marginLeft: 24,
	},
	button: {
		marginTop: 7,
		borderRadius: 16,
		height: 56,
		width: 156,
		backgroundColor: '#444444'
	}
})