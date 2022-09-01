import { Image, Text, TextInput, View } from "react-native";
import { ItemAsset } from "../../Components/ItemAsset/ItemAsset";
import { BottomMenu } from "../../Components/BottomMenu/BottomMenu";
import { Chips } from "../../Components/Chips/Chips";
import { mockAssets, mockChips } from "../../mockData";
import { TwoStyle } from "./style";

export const Two = () => {
	return(
		<>
			<View style={TwoStyle.titleBlock}>
				<Text style={TwoStyle.title}>
					Market
				</Text>
			</View>
			<View style={TwoStyle.inputBlock}>
				<Image
					style={TwoStyle.inputImg}
					source={require('../../../assets/Search.png')}/>
				<TextInput
					style={TwoStyle.input}
					placeholder="Search"
				/>
			</View>
			<Chips data={mockChips}/>
			{mockAssets.map(({
				 icon,
				 name,
				 cutName,
				 dollar,
				 percent,
				 id }) => (
				<ItemAsset
					icon={icon}
					name={name}
					cutName={cutName}
					dollar={dollar}
					percent={percent}
					key={id}
				/>
			))}
			<BottomMenu />
		</>
	)
}