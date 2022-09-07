import { Image, View } from "react-native";
import { ArrowBackStyle } from "./style";

export const ArrowBack = ({navigation}) => {
	const goBack = () => {
		navigation.goBack()
	}
	return (
			<View onTouchStart={goBack}>
				<Image style={ArrowBackStyle.arrowBack} source={require('../../../assets/arrowBack.png')}></Image>
			</View>
	)
}