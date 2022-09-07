import { StyleSheet } from 'react-native';

export const ChipsStyle = StyleSheet.create({
	slickChips: {
		flexDirection: 'row',
		marginTop: 16,
		flexGrow: 0,
		paddingLeft: 24,
		flexShrink: 0
	},
	chipWrapper: {
		height: 32,
		maxWidth: 72,
		minWidth: 72,
		backgroundColor: '#4444444D',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	chip: {
		fontSize: 12,
		lineHeight: 12,
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
	}
})