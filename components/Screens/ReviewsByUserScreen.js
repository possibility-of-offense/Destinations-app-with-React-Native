// React native
import { SafeAreaView, Text, View, FlatList } from "react-native";

// Hooks
import { useEffect, useState } from "react";

// Data
import data from "../../data/destinationsData.json";

// React native gesture handler
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

// Styles
import { reviewsByUserStyle } from "../styles/reviewsByUserStyle";

// Colors
import colors from "../../config/colors";

// React Native
import { TouchableOpacity, TouchableHighlight } from "react-native";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ReviewsByUserScreen = ({ navigation, route }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviews = [];
    Object.entries(data.reviews).forEach(([id, list]) => {
      const findById = list.filter((el) => el.id === route.params.id);

      findById.id = id;
      reviews.push(...findById);
    });

    setReviews(reviews);
    navigation.setOptions({ title: `Reviews by ${route.params.name}` });
  }, []);

  return (
    <SafeAreaView>
      <Text style={reviewsByUserStyle.heading}>
        Reviews by {route.params.name}
      </Text>

      <GestureHandlerRootView>
        <FlatList
          style={reviewsByUserStyle.list}
          data={reviews}
          keyExtractor={(review) =>
            review.id + "-" + review.destination.split(" ").join("_-_")
          }
          renderItem={({ item }) => (
            <Swipeable
              containerStyle={reviewsByUserStyle.swipeableContainer}
              renderRightActions={() => (
                <TouchableHighlight
                  style={reviewsByUserStyle.swipeableAction}
                  underlayColor={colors.secondaryGreen}
                  onPress={() =>
                    navigation.navigate("Reviews", {
                      title: item.destination,
                      id: item.destinationId,
                    })
                  }
                >
                  <MaterialCommunityIcons name="link" size={24} color="black" />
                </TouchableHighlight>
              )}
            >
              <View style={reviewsByUserStyle.listItem}>
                <Text
                  //   key={item.id + "-" + item.destination}
                  style={reviewsByUserStyle.listItemContent}
                >
                  Review by {item.name} for{" "}
                  <Text
                    style={reviewsByUserStyle.listItemContentDestinationUrl}
                    onPress={() =>
                      navigation.navigate("Destination Details", {
                        id: item.id,
                        title: item.destination,
                      })
                    }
                  >
                    {item.destination}
                  </Text>
                </Text>
                <MaterialCommunityIcons
                  name="gesture-swipe-left"
                  size={24}
                  color={colors.white}
                />
              </View>
            </Swipeable>
          )}
        ></FlatList>
      </GestureHandlerRootView>
      {/* {reviews?.map((el) => (
          <GestureHandlerRootView key={el.id}>
            <Swipeable
              renderRightActions={() => (
                <TouchableOpacity
                  style={{ backgroundColor: "pink", padding: 6 }}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>Text</Text>
                </TouchableOpacity>
              )}
            >
              <Text key={el.id} style={{ height: 50 }}>
                Review by {el.name} for{" "}
                <Text
                  onPress={() =>
                    navigation.navigate("Destination Details", {
                      id: el.id,
                      title: el.destination,
                    })
                  }
                >
                  {el.destination}
                </Text>
              </Text>
            </Swipeable>
          </GestureHandlerRootView>
        ))} */}
    </SafeAreaView>
  );
};

export default ReviewsByUserScreen;
