import { View, Image, Text } from "react-native-web";
import { OneStyle } from "../../pages/One/style";

export const ItemAsset = ({ icon, name, cutName, dollar, percent }) => (
  <View style={OneStyle.itemAsset}>
    <View style={OneStyle.iconWithTextAsset}>
      <Image style={OneStyle.iconAsset} source={icon}></Image>
      <View style={OneStyle.nameAssetBlock}>
        <Text style={OneStyle.nameCompanyAsset}>{name}</Text>
        <Text style={OneStyle.cutNameCompanyAsset}>{cutName}</Text>
      </View>
    </View>
    <View style={OneStyle.currencyAssetBlock}>
      <Text style={OneStyle.dollarAsset}>{dollar} $</Text>
      <Text style={OneStyle.percentAsset}>{percent}%</Text>
    </View>
  </View>
)