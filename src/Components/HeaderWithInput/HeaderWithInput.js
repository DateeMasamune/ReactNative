import { Image, Text, TextInput, View } from "react-native";
import { HeaderWithInputStyle } from "./style";

export const HeaderWithInput = ({title}) => (
		<>
			<View style={HeaderWithInputStyle.titleBlock}>
				<Text style={HeaderWithInputStyle.title}>
					{title}
				</Text>
			</View>
			<View style={HeaderWithInputStyle.inputBlock}>
				<Image
					style={HeaderWithInputStyle.inputImg}
					source={require('../../../assets/Search.png')}/>
				<TextInput
					style={HeaderWithInputStyle.input}
					placeholder="Search"
				/>
			</View>
		</>
	)