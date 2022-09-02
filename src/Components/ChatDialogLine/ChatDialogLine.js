import { Image, Text, View } from "react-native";
import { ChatDialogLineStyle } from "./style";

export const ChatDialogLine = ({avatar, name, msg, time, count, online=false, id}) => {
	return (
		<>
			<View style={ChatDialogLineStyle.ChatRowBlock} key={id}>
				<Image style={ChatDialogLineStyle.ChatRowAvatar} source={avatar}/>
				{online && <Image style={ChatDialogLineStyle.ChatRowAvatarOnline} source={require('../../../assets/online.png')} />}
				<View style={ChatDialogLineStyle.ChatRowDialogBlock}>
					<Text style={ChatDialogLineStyle.ChatRowDialogName}>
						{name}
					</Text>
					<Text style={ChatDialogLineStyle.ChatRowDialogMsg}>
						{msg}
					</Text>
				</View>
				<View style={ChatDialogLineStyle.ChatRowDialogTimeBlock}>
					<Text style={ChatDialogLineStyle.ChatRowDialogTime}>
						{time}
					</Text>
					{count ?
						<Text style={ChatDialogLineStyle.ChatRowDialogCountBlock}>
							<Text style={ChatDialogLineStyle.ChatRowDialogCount}>{count}</Text>
						</Text>
					: null}

				</View>
			</View>
		</>
	)
}