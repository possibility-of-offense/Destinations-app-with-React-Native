// Hooks
import { useDeviceOrientation } from "@react-native-community/hooks";

// React native
import { View, Text, Image } from "react-native";

// Styles
import { cardComponentStyles } from "../styles/cardComponentStyle";

const Card = ({ navigation, imgUrl, text, subText, navigate }) => {
  const orientation = useDeviceOrientation();

  return (
    <View style={cardComponentStyles.card}>
      <Image
        style={[
          cardComponentStyles.cardImage,
          { height: orientation.portrait ? 200 : 300 },
        ]}
        source={{
          uri: imgUrl,
        }}
        resizeMode="cover"
      />

      <View style={cardComponentStyles.cardTextContainer}>
        <Text style={cardComponentStyles.cardHeading} onPress={navigate}>
          {text}
        </Text>
        <Text style={cardComponentStyles.cardSubtitle}>{subText}</Text>
      </View>
    </View>
  );
};

export default Card;
