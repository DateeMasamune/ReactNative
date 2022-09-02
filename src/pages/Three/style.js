import { StyleSheet } from "react-native";

export const ThreeStyle = StyleSheet.create({
	detailPageHeader:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 60,
		paddingLeft: 24,
		paddingRight: 24
	},
	arrowBack:{
		height: 14,
		width: 7,
	},
	detailPageTitle:{
		fontSize: 16,
		lineHeight: 16,
		fontWeight: 600,
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
		marginBottom: 8
	},
	detailPageTitleContainer: {
		alignItems: 'center'
	},
	detailPageDescription: {
		fontSize: 12,
		lineHeight: 12,
		fontWeight: 400,
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
		opacity: .5
	},
	detailPageHeart: {
		height: 20,
		width: 20,
	},
	detailPageContent: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 32,

	},
	detailPageContentIcon:{
		height: 71,
		width: 71,
		marginBottom: 24,
	},
	detailPageContentPercent: {
		fontSize: 16,
		lineHeight: 16,
		fontWeight: 400,
		color: '#C2F927',
		fontFamily: 'Inter-Medium',
		marginBottom: 16,
	},
	detailPageContentDollar: {
		fontSize: 36,
		lineHeight: 36,
		fontWeight: 600,
		color: '#FFFFFF',
		fontFamily: 'Inter-Medium',
	},
	detailPageChartContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	chipsDetail: {
		marginTop: 41
	},
	buttonDetailBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 327,
		marginTop: 62
	}
})