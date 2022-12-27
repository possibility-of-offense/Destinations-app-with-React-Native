// Hooks
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useEffect, useState } from "react";

// React native
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

// Components
import Card from "../Cards/Card";

// Data
import data from "../../data/destinationsData.json";

// Styles
import { homeStyles as styles } from "../styles/homeStyles";
import PrimaryButton from "../Buttons/PrimaryButton.android";

// Colors
import colors from "../../config/colors";

const Home = ({ navigation }) => {
  const orientation = useDeviceOrientation();

  const [destinations, setDestinations] = useState([]);

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

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.bottomFixedContainer,
          { height: orientation.portrait ? 80 : "auto" },
        ]}
      >
        <Image
          style={{
            width: orientation.portrait ? 60 : 45,
            height: orientation.portrait ? 60 : 45,
            borderRadius: orientation.portrait ? 30 : 22.5,
          }}
          source={require("../../assets/73138031.jpg")}
        />
        <Text
          style={[
            styles.bottomFixedContainerText,
            {
              fontSize: orientation.portrait ? 15 : 13,
              marginLeft: orientation.portrait ? 15 : "auto",
            },
          ]}
        >
          Copyright &copy; - Ventsislav Iliev 2022
        </Text>
      </View>
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
      </ScrollView>
    </View>
  );
};

export default Home;
