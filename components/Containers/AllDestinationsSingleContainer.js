// Hooks
import { useDeviceOrientation } from "@react-native-community/hooks";

// React native
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import PrimaryButton from "../Buttons/PrimaryButton.android";

// Styles
import { allDesnationsStyles } from "../styles/allDestinationsStyle";

// Colors
import colors from "../../config/colors";

const AllDestinationsSingleContainer = ({
  navigation,
  destinationsData,
  imgPath,
}) => {
  const orientation = useDeviceOrientation();

  //  Navigate to destination details
  const handleNavigateDestinationDetails = (id, title) => {
    navigation.navigate("Destination Details", { id, title });
  };

  return (
    <View
      style={[
        allDesnationsStyles.container,
        { width: orientation.portrait ? "100%" : "48%" },
      ]}
    >
      <TouchableWithoutFeedback
        onPress={handleNavigateDestinationDetails.bind(
          null,
          destinationsData.id,
          destinationsData.name
        )}
      >
        <Image
          source={{ uri: imgPath }}
          resizeMode="cover"
          style={allDesnationsStyles.img}
        />
      </TouchableWithoutFeedback>
      <View style={allDesnationsStyles.textContainer}>
        <View>
          <Text
            style={allDesnationsStyles.text}
            onPress={handleNavigateDestinationDetails}
          >
            {destinationsData.name}
          </Text>
          <Text style={allDesnationsStyles.subtitle}>
            {destinationsData.subtitle}
          </Text>
        </View>

        <View style={{ paddingTop: 10 }}>
          <PrimaryButton
            backgroundColor={colors.primaryGreen}
            textColor={colors.white}
            underlayColor={colors.secondaryGreen}
            textStyles={allDesnationsStyles.checkButtonText}
            btnStyles={allDesnationsStyles.checkButton}
            onPress={handleNavigateDestinationDetails.bind(
              null,
              destinationsData.id,
              destinationsData.name
            )}
          >
            Check {destinationsData.name}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default AllDestinationsSingleContainer;
