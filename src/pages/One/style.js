import { StyleSheet } from 'react-native';

export const OneStyle = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 28,
		marginRight: 24,
		marginLeft: 24,
	},
	avatar: {
		height: 48,
		width: 48
	},
	notification: {
		height: 25,
		width: 25
	},
	title: {
		color: '#FFFFFF',
		marginRight: 80,
		fontFamily: 'Inter-Bold',
		fontSize: 22,
		lineHeight: 22
	},
	portfolio: {
		alignItems: 'center',
		marginTop: 32,
		marginBottom: 24
	},
	portfolioImg: {
		height: 176,
		width: 327
	},
	buttonsBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 24,
		paddingRight: 24
	},
	listTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 24,
		marginRight: 24,
		marginTop: 48
	},
	listTitleAssets: {
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
		fontSize: 18,
		lineHeight: 18
	},
	listTitleViewAll: {
		color: '#FFFFFF',
		opacity: 0.5,
		fontSize: 14,
		lineHeight: 14
	},
	itemAsset: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 24,
		marginRight: 24,
		marginTop: 32
	},
	iconWithTextAsset: {
		flexDirection: 'row',
	},
	iconAsset: {
		height: 48,
		width: 48,
		marginRight: 16
	},
	nameCompanyAsset: {
		fontSize: 16,
		lineHeight: 14,
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
	},
	cutNameCompanyAsset: {
		fontSize: 12,
		lineHeight: 12,
		color: '#FFFFFF',
		opacity: 0.5,
		fontFamily: 'Inter-Medium',
	},
	dollarAsset: {
		fontSize: 14,
		lineHeight: 14,
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
	},
	percentAsset: {
		fontSize: 12,
		lineHeight: 12,
		color: '#C2F927',
		fontFamily: 'Inter-Medium',
		fontWeight: 400
	},
	nameAssetBlock: {
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		marginTop: 7,
		marginBottom: 7
	},
	currencyAssetBlock: {
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 7,
		marginBottom: 7
	}
})