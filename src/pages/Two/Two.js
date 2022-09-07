import { ItemAsset } from "../../Components/ItemAsset/ItemAsset";
import { BottomMenu } from "../../Components/BottomMenu/BottomMenu";
import { Chips } from "../../Components/Chips/Chips";
import { mockAssets, mockChips } from "../../mockData";
import { HeaderWithInput } from "../../Components/HeaderWithInput/HeaderWithInput";

export const Two = ({navigation}) => {
	return(
		<>
			<HeaderWithInput title={'Search'}/>
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
					navigation={navigation}
					id={id}
				/>
			))}
			<BottomMenu navigation={navigation} />
		</>
	)
}