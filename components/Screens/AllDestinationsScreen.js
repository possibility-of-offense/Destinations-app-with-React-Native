// Hooks
import { useEffect, useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

// React native
import { ScrollView, Text, View } from "react-native";

// Data
import data from "../../data/destinationsData.json";

// Colors
import colors from "../../config/colors";

// Styles
import { allDesnationsStyles } from "../styles/allDestinationsStyle";

// Components
import Card from "../Cards/Card";
import AllDestinationsSingleContainer from "../Containers/AllDestinationsSingleContainer";

const AllDestinationsScreen = ({ navigation }) => {
  const orientation = useDeviceOrientation();
  const [destinations, setDestinations] = useState([]);

  // Get favorite destinations
  useEffect(() => {
    setDestinations(data.destinations);
  }, []);

  return (
    <ScrollView>
      <Text style={allDesnationsStyles.screenHeading}>
        {destinations.length > 0 ? "All Destinations" : "No destinations"}
      </Text>
      <View style={allDesnationsStyles.cardsContainer}>
        <View style={allDesnationsStyles.cardsContainerInner}>
          {destinations?.length > 0 &&
            destinations.map((dest) => (
              <AllDestinationsSingleContainer
                key={dest.id}
                destinationsData={dest}
                imgPath={dest.url}
                navigation={navigation}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default AllDestinationsScreen;
