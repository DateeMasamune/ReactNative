import { Image, Text, View } from "react-native";
import { ThreeStyle } from "./style";
import { Area, Chart, Line, VerticalAxis } from "react-native-responsive-linechart";

export const Three = () => {
	return(
		<>
			<View style={ThreeStyle.detailPageHeader}>
				<Image style={ThreeStyle.arrowBack} source={require('../../../assets/arrowBack.png')}></Image>
				<View  style={ThreeStyle.detailPageTitleContainer}>
					<Text style={ThreeStyle.detailPageTitle}>Google</Text>
					<Text style={ThreeStyle.detailPageDescription}>Alphabet Class A </Text>
				</View>
				<Image style={ThreeStyle.detailPageHeart} source={require('../../../assets/Heart.png')}></Image>
			</View>
			<View style={ThreeStyle.detailPageContent}>
				<Image style={ThreeStyle.detailPageContentIcon} source={require('../../../assets/google.png')}/>
				<Text style={ThreeStyle.detailPageContentPercent}>
					+2,28%
				</Text>
				<Text style={ThreeStyle.detailPageContentDollar}>
					$ 1,773,63
				</Text>
			</View>
			<View style={ThreeStyle.detailPageChartContainer}>
				<Chart
					style={{ height: 219, width: 327 }}
					data={[
						{ x: -2, y: 15 },
						{ x: -1, y: 10 },
						{ x: 0, y: 12 },
						{ x: 1, y: 7 },
						{ x: 2, y: 6 },
						{ x: 3, y: 8 },
						{ x: 4, y: 10 },
						{ x: 5, y: 8 },
						{ x: 6, y: 12 },
						{ x: 7, y: 14 },
						{ x: 8, y: 12 },
						{ x: 9, y: 13.5 },
						{ x: 10, y: 18 },
					]}
					padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
					xDomain={{ min: -2, max: 10 }}
					yDomain={{ min: 0, max: 20 }}
				>
					<VerticalAxis tickCount={5} theme={{ labels: { visible: false }}} />
					<Area theme={{ gradient: { from: { color: '#B1CE01' }, to: { color: '#B1CE01', opacity: 0.1 } }}} />
					<Line theme={{ stroke: { color: '#B1CE01', width: 1 }}} />
				</Chart>
			</View>
		</>
	)
}