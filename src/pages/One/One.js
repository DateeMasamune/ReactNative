import { Image, Text, View } from "react-native";
import { ButtonTouchable } from "../../Components/ButtonTouchable/ButtonTouchable";
import { BottomMenu } from "../../Components/BottomMenu/BottomMenu";
import { ItemAsset } from "../../Components/ItemAsset/ItemAsset";
import { mockAssets } from "../../mockData";

import { OneStyle } from "./style";

export const One = ({navigation}) => (
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
			<ButtonTouchable
				image={require('../../../assets/Document.png')}
				text={'Operations'}
			/>
			<ButtonTouchable
				image={require('../../../assets/Heart.png')}
				text={'Favourites'}
			/>
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
				navigation={navigation}
				id={id}
			/>
		)}
		<BottomMenu navigation={navigation} />
	</>
)