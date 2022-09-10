import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-anchor-carousel/src/carousel";
import { ChipsStyle } from "./style";

export const Chips = ({data}) => {
	const {width: windowWidth} = Dimensions.get('window');
	return(
		<Carousel
			data={data}
			renderItem={({item, index}) => (
				<View
					key={`${item}${index}`}
					style={ChipsStyle.chipWrapper}
				>
					<Text style={ChipsStyle.chip}>
						{item}
					</Text>
				</View>
			)}
			style={ChipsStyle.slickChips}
			containerWidth={windowWidth}
			inActiveScale={1}
			inActiveOpacity={1}
			itemContainerStyle={ChipsStyle.chipWrapper}
		/>
	)
}