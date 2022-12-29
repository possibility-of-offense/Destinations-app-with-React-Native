// import "react-native-gesture-handler";

// Hooks
import { useDeviceOrientation } from "@react-native-community/hooks";
import { Text, View } from "react-native";
import React, { useState } from "react";

// React navigation
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import AddReviewScreen from "./components/Screens/AddReviewScreen";

// Context
import { ThemeContext } from "./components/Context/ThemeContext";

// Navigation ref
import { navigationRef } from "./components/Screens/RootNavigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const orientation = useDeviceOrientation();
  const [themeColor, setThemeColors] = useState(colors.white);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: themeColor,
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
                      // fontSize: 18,
                      fontWeight: "bold",
                      paddingRight: 40,
                      // flexDirection: "row",
                      // alignItems: "center",
                      // justifyContent: "center",
                      // flex: 1,
                    }}
                    onPress={() => props.navigation.pop()}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        left: 30,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="chevron-left"
                        size={30}
                        color={colors.white}
                        style={{ top: 3 }}
                      />
                    </View>

                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.white,
                        }}
                      >
                        {props.options.title}
                      </Text>
                    </View>
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
          <Stack.Screen
            name="Add review"
            component={AddReviewScreen}
            options={{ title: "Add review" }}
          />
        </Stack.Navigator>
      </ThemeContext.Provider>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <View
          style={{
            width: 100,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 1,
            borderRightColor: "#ccc",
          }}
        >
          <MaterialCommunityIcons
            onPress={() => navigationRef?.current?.navigate("Home")}
            name="home"
            size={20}
            color="#333"
          />
        </View>
        <View
          style={{
            width: 100,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 1,
            borderRightColor: "#ccc",
          }}
        >
          <MaterialCommunityIcons
            onPress={() => navigationRef?.current?.navigate("All Destinations")}
            name="map"
            size={20}
            color="#333"
          />
        </View>
      </View>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppContainer />
    </View>
  );
}
