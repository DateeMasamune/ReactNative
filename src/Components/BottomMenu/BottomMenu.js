import { BlurView } from "expo-blur";

import { bottomMenu } from "./style";
import { bottomMenuItems } from "../../mockData";
import { useContext } from "react";
import { BottomMenuContext } from "../BottomMenuContext/BottomMenuContext";

export const BottomMenu = ({navigation}) => {
	const {selectItemMenu, setSelectItemMenu} = useContext(BottomMenuContext)
	const transferScreen = (page, id) => {
		navigation.navigate(page)
		setSelectItemMenu(id)
	}
	return(
		<>
			<BlurView intensity={25} style={bottomMenu.menu}>
				{bottomMenuItems.map(({id, page, style, color,Component}) => (
					<Component
						onPress={() => transferScreen(page, id)}
						style={style} color={selectItemMenu === id ? 'white': color}
						key={id} />
				))}
			</BlurView>
		</>
	)
}