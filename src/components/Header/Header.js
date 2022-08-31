import { Image, Text, View } from "react-native";
import { headerStyles } from "./styles";

export const Header = () => {
	return(
		<View style={headerStyles.header}>
			<Image source={require('../../../assets/Avatar.png')} />
			<Text style={headerStyles.title}>Hello, Oliver</Text>
			<Image source={require('../../../assets/Notification.png')} />
		</View>
	)
}