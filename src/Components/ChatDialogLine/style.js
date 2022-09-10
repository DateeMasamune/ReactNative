import { StyleSheet } from 'react-native';

export const ChatDialogLineStyle = StyleSheet.create({
	ChatRowBlock:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 24,
		paddingRight: 24,
		marginTop: 24,
		position: 'relative'
	},
	ChatRowAvatar:{
		height: 48,
		width: 48
	},
	ChatRowAvatarOnline: {
		height: 10,
		width: 10,
		position: 'absolute',
		left: 58,
		bottom: 0
	},
	ChatRowDialogName:{
		fontFamily: 'Inter-Medium',
		fontWeight: 500,
		fontSize: 16,
		lineHeight: 14,
		color: '#FFFFFF',
		marginBottom: 8
	},
	ChatRowDialogBlock:{

	},
	ChatRowDialogMsg:{
		fontFamily: 'Inter-Medium',
		fontWeight: 400,
		fontSize: 12,
		lineHeight: 12,
		color: '#FFFFFF',
		opacity: 0.5,
	},
	ChatRowDialogTimeBlock:{
		alignItems: 'flex-end'
	},
	ChatRowDialogTime:{
		fontFamily: 'Inter-Medium',
		fontWeight: 400,
		fontSize: 10,
		lineHeight: 10,
		color: '#FFFFFF',
		opacity: 0.5,
		marginBottom: 7
	},
	ChatRowDialogCountBlock: {
		width: 17,
		height: 17,
		backgroundColor: '#E8AE18',
		borderRadius: 100,
		textAlign: 'center'
	},
	ChatRowDialogCount: {
		fontFamily: 'Inter-Medium',
		fontWeight: 700,
		fontSize: 10,
		color: '#FFFFFF'
	}
})