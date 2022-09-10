import { View } from 'react-native';
import { useCustomFonts } from "./src/hooks/useCustomFonts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomMenuProvider } from "./src/Components/BottomMenuContext/BottomMenuContext";
import { pages } from "./src/mockData";
import { MyTheme, stylesMainContainer } from "./src/theme";

export default function App() {
	const { fontsLoaded, onLayoutRootView } = useCustomFonts()
	const {Screen, Navigator} = createNativeStackNavigator();
	if (!fontsLoaded) {
		return null;
	}

	return (
		<BottomMenuProvider>
			<View style={stylesMainContainer.container} onLayout={onLayoutRootView}>
				<NavigationContainer theme={MyTheme}>
					<Navigator>
						{pages.map(({name,component, id}) => (
							component && <Screen key={id} name={name} component={component} />
						))}
					</Navigator>
				</NavigationContainer>
			</View>
		</BottomMenuProvider>

	);
}
