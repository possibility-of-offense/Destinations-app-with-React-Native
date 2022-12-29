// Hooks
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useContext, useEffect, useState } from "react";

// React native
import { View, Text, ScrollView, Switch, Button } from "react-native";

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
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Home = ({ navigation }) => {
  const orientation = useDeviceOrientation();

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
      {/* <View style={{ backgroundColor: "orange", height: 750 }}>
        <Drawer.Navigator initialRouteName="Homee">
          <Drawer.Screen name="Homee" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </View> */}
      <ScrollView>
        <View style={styles.homeContainer}>
          <Text style={styles.homeContainerHeading}>
            Favourite Destinations
          </Text>
          <PrimaryButton
            backgroundColor={colors.primaryGreen}
            textColor={colors.white}
            underlayColor={colors.secondaryGreen}
            onPress={handleNavigateToAllDestinations}
          >
            See all destinations
          </PrimaryButton>
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
