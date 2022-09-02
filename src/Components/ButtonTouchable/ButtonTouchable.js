import { Image, Text, TouchableOpacity } from "react-native";
import { ButtonTouchableStyle } from "./style";

export const ButtonTouchable = ({image=false, text}) => {
	return (
		<TouchableOpacity
			style={ButtonTouchableStyle.button}
		>
			{image && <Image style={ButtonTouchableStyle.buttonImg} source={image} />}
			<Text style={ButtonTouchableStyle.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}