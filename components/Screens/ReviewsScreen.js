// React native
import { View, Text, FlatList, SafeAreaView } from "react-native";

// React hooks
import { useEffect, useState } from "react";

// Data
import data from "../../data/destinationsData.json";

// Constants
import Constants from "expo-constants";

// Styles
import { reviewScreenStyle } from "../styles/reviewScreenStyle";
import ListItem from "../ListItem/ListItem";

function ReviewsScreen({ navigation, route }) {
  const [reviews, setReviews] = useState([]);

  // Set options title
  useEffect(() => {
    navigation.setOptions({
      title: `Reviews about ${route.params.title}`,
    });
    setReviews(data.reviews[route.params.id] || {});
  }, []);

  return (
    <SafeAreaView style={{ paddingTop: Constants.statusBarHeight - 15 }}>
      <Text style={reviewScreenStyle.heading}>
        {reviews?.length > 0 ? "Reviews" : "No reviews yet"}
      </Text>
      <FlatList
        style={reviewScreenStyle.list}
        data={reviews}
        keyExtractor={(review) => review.id}
        renderItem={({ item, index, separators }) => <ListItem item={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 1, backgroundColor: "#333" }}>
            <Text>Separator</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default ReviewsScreen;
