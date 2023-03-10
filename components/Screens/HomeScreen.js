// Hooks
import { useContext, useEffect, useState } from "react";

// React native
import { View, Text, ScrollView, Switch } from "react-native";

// Components
import Card from "../Cards/Card";

// Data
import data from "../../data/destinationsData.json";

// Styles
import { homeStyles, homeStyles as styles } from "../styles/homeStyles";

import PrimaryButton from "../Buttons/PrimaryButton.android";

// Colors
import colors from "../../config/colors";
import { ThemeContext } from "../Context/ThemeContext";

const Home = ({ navigation }) => {
  const [destinations, setDestinations] = useState([]);
  const [switchValue, setSwitchValue] = useState(false);

  // Context
  const themeContext = useContext(ThemeContext);

  // Get favorite destinations
  useEffect(() => {
    setDestinations(data.destinations.filter((dest) => dest.favorite));
  }, []);

  // Navigate to all destinations
  const handleNavigateToAllDestinations = () => {
    navigation.navigate("All Destinations");
  };

  //  Navigate to destination details
  const handleNavigateDestinationDetails = (id, title) => {
    navigation.navigate("Destination Details", { id, title });
  };

  // Change Bg
  const handleToggleBgBackground = (val) => {
    setSwitchValue(val);
    if (val) {
      themeContext.setThemeColors("#57608a");
    } else {
      themeContext.setThemeColors(colors.white);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.homeContainer}>
          <Text style={styles.homeContainerHeading}>
            Favourite Destinations
          </Text>

          <View>
            {destinations?.length > 0 &&
              destinations.map((dest) => (
                <Card
                  key={dest.id}
                  text={dest.name}
                  subText={dest.subtitle}
                  imgUrl={dest.url}
                  navigate={handleNavigateDestinationDetails.bind(
                    null,
                    dest.id,
                    dest.name
                  )}
                />
              ))}
          </View>
          <PrimaryButton
            backgroundColor={colors.primaryGreen}
            textColor={colors.white}
            underlayColor={colors.secondaryGreen}
            onPress={handleNavigateToAllDestinations}
            btnStyles={{ marginTop: 7 }}
          >
            See all destinations
          </PrimaryButton>
        </View>
        <View style={homeStyles.switchContainer}>
          <Text style={styles.switchContainerText}>
            Change Background Color
          </Text>
          <View style={styles.switchContainerToggler}>
            <Switch
              value={switchValue}
              onValueChange={handleToggleBgBackground}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
