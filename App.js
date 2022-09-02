import { StyleSheet, View } from 'react-native';
import { useCustomFonts } from "./src/hooks/useCustomFonts";
import { One } from "./src/pages/One/One";
import { Two } from "./src/pages/Two/Two";
import { Three } from "./src/pages/Three/Three";
import { Four } from "./src/pages/Four/Four";
import { Five } from "./src/pages/Five/Five";

export default function App() {
	const { fontsLoaded, onLayoutRootView } = useCustomFonts()

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			{/* <One /> */}
			{/*<Two />*/}
			{/*<Three />*/}
			{/*<Four />*/}
			<Five />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#171717',
	},
});
