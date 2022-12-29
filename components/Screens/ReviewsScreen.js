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

// Components
import PrimaryButton from "../Buttons/PrimaryButton.android";

function ReviewsScreen({ navigation, route }) {
  const [reviews, setReviews] = useState([]);

  // Set options title
  useEffect(() => {
    navigation.setOptions({
      title: `Reviews about ${route.params.title}`,
    });
    setReviews(data.reviews[route.params.id] || {});
  }, [route.params.id]);

  useEffect(() => {
    if (route.params?.review && Object.keys(route.params.review).length > 0) {
      const { name, content, id, title } = route.params.review;

      setReviews((prev) =>
        prev.concat({
          id: name.split(" ").join("-").toLowerCase(),
          name: name,
          text: content,
          image:
            "https://images.unsplash.com/photo-1453574503519-1ae2536262ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          destination: title,
          destinationId: id,
        })
      );
    }
  }, [route.params.review]);

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
              {/* <Text>Separator</Text> */}
            </View>
          )}
        />
        <PrimaryButton
          backgroundColor={colors.primaryGreen}
          textColor={colors.white}
          underlayColor={colors.secondaryGreen}
          onPress={() =>
            navigation.navigate("Add review", { id: route.params.id })
          }
          btnStyles={{ marginBottom: 20, marginHorizontal: 20 }}
        >
          Add Review
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
}

export default ReviewsScreen;
