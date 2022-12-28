// React native
import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";

// React hooks
import { useEffect, useState } from "react";

// Data
import data from "../../data/destinationsData.json";

// Constants
import Constants from "expo-constants";

// Styles
import { reviewScreenStyle } from "../styles/reviewScreenStyle";
import ListItem from "../ListItem/ListItem";

// Colors
import colors from "../../config/colors";

function ReviewsScreen({ navigation, route }) {
  const [reviews, setReviews] = useState([]);

  // Set options title
  useEffect(() => {
    navigation.setOptions({
      title: `Reviews about ${route.params.title}`,
    });
    setReviews(data.reviews[route.params.id] || {});
  }, [route.params.id]);

  return (
    <SafeAreaView
      style={{ paddingTop: Constants.statusBarHeight - 35, flex: 1 }}
    >
      <Text style={reviewScreenStyle.heading}>
        {reviews?.length > 0 ? "Reviews" : "No reviews yet"}
      </Text>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          style={reviewScreenStyle.list}
          data={reviews}
          keyExtractor={(review) => review.id}
          renderItem={({ item, index, separators }) => (
            <ListItem navigation={navigation} item={item} />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: colors.primaryGreen,
              }}
            >
              <Text>Separator</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default ReviewsScreen;
