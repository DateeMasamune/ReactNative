import { HeaderWithInput } from "../../Components/HeaderWithInput/HeaderWithInput";
import { mockDialogLines } from "../../mockData";
import { ChatDialogLine } from "../../Components/ChatDialogLine/ChatDialogLine";
import { BottomMenu } from "../../Components/BottomMenu/BottomMenu";

export const Four = ({navigation}) => {
	return(
		<>
			<HeaderWithInput title={'Chats'} />
			{mockDialogLines.map(({avatar, name, msg, time, count, online, id}) => (
				<ChatDialogLine
					key={id}
					avatar={avatar}
					name={name}
					msg={msg}
					time={time}
					count={count}
					online={online}
				/>
			))}
			<BottomMenu navigation={navigation} />
		</>
	)
}