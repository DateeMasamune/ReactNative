import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export const useCustomFonts = () => {
	const [fontsLoaded] = useFonts({
		'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	return {
		fontsLoaded,
		onLayoutRootView
	}
}