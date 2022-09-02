import { Image, View } from "react-native";
import { ArrowBackStyle } from "./style";

export const ArrowBack = () => {
	return (
			<View>
				<Image style={ArrowBackStyle.arrowBack} source={require('../../../assets/arrowBack.png')}></Image>
			</View>
	)
}