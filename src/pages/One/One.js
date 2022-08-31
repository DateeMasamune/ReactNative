import { Image, Text, TouchableOpacity, View } from "react-native";

import { OneStyle } from "./style";

export const One = () => {
	return(
		<>
			<View style={OneStyle.header}>
				<Image source={require('../../../assets/Avatar.png')} />
				<Text style={OneStyle.title}>Hello, Oliver</Text>
				<Image source={require('../../../assets/Notification.png')} />
			</View>
			<View style={OneStyle.portfolio}>
				<Image source={require('../../../assets/portfolio.png')} />
			</View>
			<View style={OneStyle.buttonsBlock}>
				<TouchableOpacity
					style={OneStyle.button}
					title={'Operations'}
				/>
				<TouchableOpacity
					style={OneStyle.button}
					title={'Favourites'}
				/>
			</View>
		</>
	)
}