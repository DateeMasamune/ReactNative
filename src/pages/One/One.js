import { Image, Text, TouchableOpacity, View } from "react-native";
import { BottomMenu } from "../../Components/BottomMenu/BottomMenu";
import { ItemAsset } from "../../Components/ItemAsset/ItemAsset";
import { mockAssets } from "../../mockData";

import { OneStyle } from "./style";

export const One = () => (
	<>
		<View style={OneStyle.header}>
			<Image style={OneStyle.avatar} source={require('../../../assets/Avatar.png')} />
			<Text style={OneStyle.title}>Hello, Oliver</Text>
			<Image style={OneStyle.notification} source={require('../../../assets/Notification.png')} />
		</View>
		<View style={OneStyle.portfolio}>
			<Image style={OneStyle.portfolioImg} source={require('../../../assets/portfolio.png')} />
		</View>
		<View style={OneStyle.buttonsBlock}>
			<TouchableOpacity
				style={OneStyle.button}
			>
				<Image style={OneStyle.buttonImg} source={require('../../../assets/Document.png')}></Image>
				<Text style={OneStyle.buttonText}>Operations</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={OneStyle.button}
			>
				<Image style={OneStyle.buttonImg} source={require('../../../assets/Heart.png')}></Image>
				<Text style={OneStyle.buttonText}>Favourites</Text>
			</TouchableOpacity>
		</View>
		<View style={OneStyle.listTitle}>
			<Text style={OneStyle.listTitleAssets}>
				My assets
			</Text>
			<Text style={OneStyle.listTitleViewAll}>
				View all
			</Text>
		</View>
		{mockAssets.map(({ icon, name, cutName, dollar, percent, id }) =>
			<ItemAsset
				icon={icon}
				name={name}
				cutName={cutName}
				dollar={dollar}
				percent={percent}
				key={id}
			/>
		)}
		<BottomMenu />
	</>
)