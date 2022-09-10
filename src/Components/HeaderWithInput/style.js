import { StyleSheet } from 'react-native';

export const HeaderWithInputStyle = StyleSheet.create({
	titleBlock:{
		paddingTop: 28,
		paddingLeft: 24,
		paddingBottom: 32
	},
	title:{
		fontSize: 28,
		lineHeight: 18,
		color: '#FFFFFF',
		fontFamily: 'Inter-Bold',
	},
	inputBlock: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	input: {
		paddingLeft: 40,
		height: 48,
		width: 327,
		backgroundColor: '#444444',
		borderRadius: 16,
		fontSize: 14,
		lineHeight: 14,
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
		fontWeightL: 400,
		opacity: 0.5,
		borderWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.5)',
		outlineStyle: 'unset'
	},
	inputImg:{
		left: 41,
		position: 'absolute',
		height: 16,
		width: 16,
		opacity: 0.5
	}
})