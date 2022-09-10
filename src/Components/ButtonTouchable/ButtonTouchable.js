import { Image, Text, TouchableOpacity } from "react-native";
import { ButtonTouchableStyle } from "./style";
import WebView from "react-native-webview";

export const ButtonTouchable = ({image, text}) => {
	return (
		<TouchableOpacity
			onPress={() => {
				console.log('===>111111111', 111111111)
				return <WebView source={{uri: 'https://reactnative.dev/'}} />
			}}
			style={ButtonTouchableStyle.button}
		>
			{image && <Image style={ButtonTouchableStyle.buttonImg} source={image} />}
			<Text style={ButtonTouchableStyle.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}