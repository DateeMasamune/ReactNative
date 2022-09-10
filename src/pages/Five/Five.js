import { Image, Text, TextInput } from "react-native"
import { View } from "react-native-web"
import { ArrowBack } from "../../Components/ArrowBack/ArrowBack"
import { FiveStyle } from "./style"

export const Five = ({navigation}) => {
	return (
		<>
			<View style={FiveStyle.supportContainer}>
				<ArrowBack navigation={navigation} />
				<View style={FiveStyle.supportIconBlock}>
					<View style={FiveStyle.supportIconShape}>
						<Image style={FiveStyle.supportIcon} source={require('../../../assets/help.png')} />
					</View>
					<Text style={FiveStyle.supportTitle}>
						Support
					</Text>
				</View>
				<Image style={FiveStyle.supportSearchIcon} source={require('../../../assets/Search.png')} />
			</View>
			<View style={FiveStyle.dialogBlock}>
				<Text style={FiveStyle.dialogDate}>
					28 July
				</Text>
				<View style={FiveStyle.dialogBlockSupport}>
					<View style={FiveStyle.dialogSupport}>
						<View style={FiveStyle.supportIconShape}>
							<Image style={FiveStyle.supportIcon} source={require('../../../assets/help.png')} />
						</View>
						<Text style={FiveStyle.dialogTextSupport}>
							Hello, how can we help?
						</Text>
					</View>
					<View style={FiveStyle.dialogMeBlock}>
						<Text style={FiveStyle.dialogMe}>
							Hello, please tell us about the
							referral system? How does it work? <Image style={FiveStyle.dialogMeCheck} source={require('../../../assets/check.png')} />
						</Text>
					</View>
					<View style={FiveStyle.dialogSupport}>
						<View style={FiveStyle.supportIconShape}>
							<Image style={FiveStyle.supportIcon} source={require('../../../assets/help.png')} />
						</View>
						<Text style={FiveStyle.dialogTextSupport}>
							To receive bonuses, it
							is necessary for your friend
							to use your referral link
						</Text>
					</View>
					<View style={FiveStyle.dialogMeBlock}>
						<Text style={FiveStyle.dialogMe}>
							Thanks for the answer! <Image style={FiveStyle.dialogMeCheck} source={require('../../../assets/check.png')} />
						</Text>
					</View>
				</View>
				<View style={FiveStyle.enterBlock}>
					<View style={FiveStyle.enterMsg}>
						<TextInput
							style={FiveStyle.inputEnterMsg}
							placeholder="Type message"
						/>
						<Image style={FiveStyle.inputEnterMsgIcon} source={require('../../../assets/attach.png')} />
					</View>
					<View style={FiveStyle.inputEnterMsgButton}>
						<Image style={FiveStyle.inputEnterMsgButtonIcon} source={require('../../../assets/enter.png')} />
					</View>
				</View>
			</View>
		</>
	)
}