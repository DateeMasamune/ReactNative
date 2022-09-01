import { BlurView } from "expo-blur";
import { Chat } from "../Icons/Chat/Chat";
import { Home } from "../Icons/Home/Home";
import { Chart } from "../Icons/Chart/Chart";
import { Setting } from "../Icons/Setting/Setting";

import { bottomMenu } from "./style";

export const BottomMenu = () => {
	const selectedMenu = () => {
		console.log('===>111111', 111111);
	}
	return(
		<>
			<BlurView intensity={25} style={bottomMenu.menu}>
				<Home style={bottomMenu.homeIcon} color='white' onClick={selectedMenu} />
				<Chart style={bottomMenu.chartIcon} color='#757575' onClick={selectedMenu} />
				<Chat style={bottomMenu.chatIcon} color='#757575' onClick={selectedMenu} />
				<Setting style={bottomMenu.settingIcon} color='#757575' onClick={selectedMenu} />
			</BlurView>
		</>
	)
}