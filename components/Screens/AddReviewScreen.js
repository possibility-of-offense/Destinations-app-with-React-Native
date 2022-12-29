// React native
import { View, Text } from "react-native";

// React hooks
import { useEffect, useState } from "react";

// Components
import Input from "../Inputs/Input";
import AppPicker from "../Picker/AppPicker";

// Styles
import { reviewInputStyle } from "../styles/reviewInputStyle";

// Data
import data from "../../data/destinationsData.json";

// Colors
import colors from "../../config/colors";
import PrimaryButton from "../Buttons/PrimaryButton.android";

const ratingData = [1, 2, 3, 4, 5, 6];

const AddReviewScreen = ({ navigation, route }) => {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(null);
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState(null);
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState(null);

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (fullNameError === null && contentError === null && ratingError === null)
      return;

    if (fullName) setFullNameError("");
    else {
      setFullNameError("Enter full name");
    }

    if (content) setContentError("");
    else {
      setContentError("Enter content");
    }

    if (rating || rating > 0) setRatingError("");
    else {
      setRatingError("Pick a rating");
    }
  }, [fullName, content, rating]);

  useEffect(() => {
    const findById = data.destinations[route.params.id];

    if (findById) {
      setTitle(findById.name);
    }
  }, []);

  // Handle Add Review
  const handleAddReview = () => {
    const review = {
      name: fullName,
      content,
      rating,
    };
    if (review.name && review.content && review.rating) {
      navigation.navigate("Reviews", { review, id: route.params.id, title });
    } else {
      if (!fullName) setFullNameError("Enter full name");
      if (!content) setContentError("Enter content");
      if (!rating || rating === 0) setRatingError("Pick a rating");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={reviewInputStyle.heading}>
        Add review {title ? `for ${title}` : ""}
      </Text>
      <Text style={reviewInputStyle.subtitle}>
        If you're not logged in, the picture for your review will be random.
      </Text>
      <View style={[reviewInputStyle.loginBtn]}>
        <Text
          style={[
            reviewInputStyle.loginBtnText,
            { backgroundColor: colors.primaryGreen },
          ]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login from here
        </Text>
      </View>
      <Input
        val={fullName}
        setVal={setFullName}
        styles={reviewInputStyle}
        placeholder="Your Name"
        icon="face-man"
      />
      {fullNameError && fullNameError !== null && (
        <Text style={reviewInputStyle.error}>{fullNameError}</Text>
      )}
      <Input
        val={content}
        setVal={setContent}
        styles={reviewInputStyle}
        placeholder="Review"
        icon="pencil"
      />
      {contentError && contentError !== null && (
        <Text style={reviewInputStyle.error}>{contentError}</Text>
      )}
      <AppPicker data={ratingData} rating={rating} setRating={setRating} />
      {ratingError && ratingError !== null && (
        <Text style={reviewInputStyle.error}>{ratingError}</Text>
      )}
      <PrimaryButton
        backgroundColor={colors.primaryGreen}
        textColor={colors.white}
        underlayColor={colors.secondaryGreen}
        onPress={handleAddReview}
        btnStyles={{ marginBottom: 20, marginHorizontal: 20, marginTop: 10 }}
      >
        Add Review
      </PrimaryButton>
    </View>
  );
};

export default AddReviewScreen;
