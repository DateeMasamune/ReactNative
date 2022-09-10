import { bottomMenu } from "./Components/BottomMenu/style";
import { Setting } from "./Components/Icons/Setting/Setting";
import { Chat } from "./Components/Icons/Chat/Chat";
import { Chart } from "./Components/Icons/Chart/Chart";
import { Home } from "./Components/Icons/Home/Home";
import { Two } from "./pages/Two/Two";
import { Three } from "./pages/Three/Three";
import { Four } from "./pages/Four/Four";
import { Five } from "./pages/Five/Five";
import { One } from "./pages/One/One";

export const mockAssets = [
	{
		icon: require('../assets/apple.png'),
		name: 'Apple',
		cutName: 'AAPL',
		dollar: '146,97',
		percent: '+3,16',
		id: 1
	},
	{
		icon: require('../assets/microsoft.png'),
		name: 'Microsoft',
		cutName: 'MSFT',
		dollar: '624,28',
		percent: '-3,38',
		id: 2
	},
	{
		icon: require('../assets/google.png'),
		name: 'Alphabet Class A ',
		cutName: 'GOOGL',
		dollar: '2 842,95',
		percent: '+2,28',
		id: 3
	},
	{
		icon: require('../assets/apple.png'),
		name: 'Apple',
		cutName: 'AAPL',
		dollar: '146,97',
		percent: '+3,16',
		id: 4
	},
	{
		icon: require('../assets/microsoft.png'),
		name: 'Microsoft',
		cutName: 'MSFT',
		dollar: '624,28',
		percent: '-3,38',
		id: 5
	},
	{
		icon: require('../assets/google.png'),
		name: 'Alphabet Class A ',
		cutName: 'GOOGL',
		dollar: '2 842,95',
		percent: '+2,28',
		id: 6
	},
	{
		icon: require('../assets/apple.png'),
		name: 'Apple',
		cutName: 'AAPL',
		dollar: '146,97',
		percent: '+3,16',
		id: 7
	},
	{
		icon: require('../assets/microsoft.png'),
		name: 'Microsoft',
		cutName: 'MSFT',
		dollar: '624,28',
		percent: '-3,38',
		id: 8
	},
	{
		icon: require('../assets/google.png'),
		name: 'Alphabet Class A ',
		cutName: 'GOOGL',
		dollar: '2 842,95',
		percent: '+2,28',
		id: 9
	}
]

export const mockChips = [
	'Stocks',
	'Currency',
	'Funds',
	'Futures',
	'Stocks',
	'Currency',
	'Funds',
	'Futures',
	'Stocks',
	'Currency',
	'Funds',
	'Futures',
]

export const mockChipsDetail = [
	'Day',
	'Month',
	'6 months',
	'1 year',
	'Day',
	'Month',
	'6 months',
	'1 year',
	'Day',
	'Month',
	'6 months',
	'1 year',
]

export const mockDialogLines = [
	{
		avatar: require('../assets/Photo1.png'),
		name: 'Cai Cardenas',
		msg: 'Hi! How are you?',
		time: '4:20',
		count: 8,
		online: true,
		id: 1
	},
	{
		avatar: require('../assets/Photo2.png'),
		name: 'Tomasz Mazurczak',
		msg: 'I ll send you the documentation...',
		time: '3:34',
		count: 8,
		online: false,
		id: 2
	},
	{
		avatar: require('../assets/Photo3.png'),
		name: 'Kris Beliaieva',
		msg: 'Look at the post office',
		time: '1:45',
		count: 0,
		online: true,
		id: 3
	},
	{
		avatar: require('../assets/Photo4.png'),
		name: 'Cai Cardenas',
		msg: 'Hi! How are you?',
		time: '4:20',
		count: 1,
		online: false,
		id: 4
	},
	{
		avatar: require('../assets/Photo5.png'),
		name: 'Azie Melasari',
		msg: 'Tesla +20% in 3 days',
		time: 'Tue',
		count: 0,
		online: true,
		id: 5
	},
	{
		avatar: require('../assets/Photo6.png'),
		name: 'Anna Tolkacheva',
		msg: 'Yes, we called him after.',
		time: 'Thu',
		count: 3,
		online: true,
		id: 6
	},
	{
		avatar: require('../assets/Photo1.png'),
		name: 'Cai Cardenas',
		msg: 'Hi! How are you?',
		time: '4:20',
		count: 8,
		online: true,
		id: 7
	},
	{
		avatar: require('../assets/Photo2.png'),
		name: 'Tomasz Mazurczak',
		msg: 'I ll send you the documentation...',
		time: '3:34',
		count: 8,
		online: false,
		id: 8
	},
	{
		avatar: require('../assets/Photo3.png'),
		name: 'Kris Beliaieva',
		msg: 'Look at the post office',
		time: '1:45',
		count: 0,
		online: true,
		id: 9
	},
	{
		avatar: require('../assets/Photo4.png'),
		name: 'Cai Cardenas',
		msg: 'Hi! How are you?',
		time: '4:20',
		count: 1,
		online: false,
		id: 10
	},
	{
		avatar: require('../assets/Photo5.png'),
		name: 'Azie Melasari',
		msg: 'Tesla +20% in 3 days',
		time: 'Tue',
		count: 0,
		online: true,
		id: 11
	},
	{
		avatar: require('../assets/Photo6.png'),
		name: 'Anna Tolkacheva',
		msg: 'Yes, we called him after.',
		time: 'Thu',
		count: 3,
		online: true,
		id: 12
	},
]

export const bottomMenuItems = [
	{
		id: 1,
		page: 'One',
		style: bottomMenu.homeIcon,
		color: '#757575',
		Component: Home,
	},
	{
		id: 2,
		page: 'Two',
		style: bottomMenu.chartIcon,
		color: '#757575',
		Component: Chart
	},
	{
		id: 3,
		page: 'Four',
		style: bottomMenu.chatIcon,
		color: '#757575',
		Component: Chat
	},
	{
		id: 4,
		page: 'Five',
		style: bottomMenu.settingIcon,
		color: '#757575',
		Component: Setting
	},
]

export const pages = [
	{
		id: 1,
		name: 'One',
		component: One
	},
	{
		id: 2,
		name: 'Two',
		component: Two
	},
	{
		id: 3,
		name: 'Three',
		component: Three
	},
	{
		id: 4,
		name: 'Four',
		component: Four
	},
	{
		id: 5,
		name: 'Five',
		component: Five
	},
]