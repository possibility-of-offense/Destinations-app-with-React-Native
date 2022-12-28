// import "react-native-gesture-handler";

// Hooks
import { useDeviceOrientation } from "@react-native-community/hooks";
import { Text, View } from "react-native";

// React navigation
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Screens
import Home from "./components/Screens/HomeScreen";

// Colors
import colors from "./config/colors";
import AllDestinationsScreen from "./components/Screens/AllDestinationsScreen";
import DestinationDetailsScreen from "./components/Screens/DestinationDetailsScreen";
import GalleryImageScreen from "./components/Screens/GalleryImageScreen";
import ReviewsScreen from "./components/Screens/ReviewsScreen";
import ReviewsByUserScreen from "./components/Screens/ReviewsByUserScreen";
import React, { useState } from "react";

import { ThemeContext } from "./components/Context/ThemeContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const orientation = useDeviceOrientation();

  const [themeColor, setThemeColors] = useState(colors.white);

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: themeColor,
          // background: "#57608a",
        },
      }}
    >
      <ThemeContext.Provider value={{ themeColor, setThemeColors }}>
        <Stack.Navigator
          screenOptions={{
            header: (props) => (
              <View
                style={{
                  height: orientation.portrait ? 90 : 60,
                  backgroundColor: colors.primaryGreen,
                }}
              >
                {props.route.name === "Home" ? (
                  <Text
                    style={{
                      color: colors.white,
                      marginTop: orientation.portrait ? 50 : 25,
                      marginLeft: 20,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    <MaterialCommunityIcons
                      onPress={() => props.navigation.navigate("Home")}
                      name="home"
                      size={30}
                    />
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: colors.white,
                      marginTop: orientation.portrait ? 50 : 25,
                      marginLeft: 20,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                    onPress={() => props.navigation.pop()}
                  >
                    <MaterialCommunityIcons name="chevron-left" size={18} />
                    {props.options.title}
                  </Text>
                )}
              </View>
            ),
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="All Destinations"
            component={AllDestinationsScreen}
            options={{ title: "All Destinations" }}
          />
          <Stack.Screen
            name="Destination Details"
            component={DestinationDetailsScreen}
            options={{ title: "Destination Details" }}
          />
          <Stack.Screen
            name="Gallery Image"
            component={GalleryImageScreen}
            options={{ title: "Image" }}
          />
          <Stack.Screen
            name="Reviews"
            component={ReviewsScreen}
            options={{ title: "Review" }}
          />
          <Stack.Screen
            name="Reviews by user"
            component={ReviewsByUserScreen}
            options={{ title: "Reviews by " }}
          />
        </Stack.Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
