// React native
import { View, Text } from "react-native";

// React hooks
import { useEffect, useState } from "react";

// Components
import Input from "../Inputs/Input";

// Styles
import { reviewInputStyle } from "../styles/reviewInputStyle";

// Data
import data from "../../data/destinationsData.json";

// Colors
import colors from "../../config/colors";
import PrimaryButton from "../Buttons/PrimaryButton.android";

const AddReviewScreen = ({ navigation, route }) => {
  const [fullName, setFullName] = useState("");
  const [content, setContent] = useState("");

  const [title, setTitle] = useState("");

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
    };
    navigation.navigate("Reviews", { review, id: route.params.id, title });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={reviewInputStyle.heading}>
        Add review {title ? `for ${title}` : ""}
      </Text>
      <Input
        val={fullName}
        setVal={setFullName}
        styles={reviewInputStyle}
        placeholder="Your Name"
        icon="face-man"
      />
      <Input
        val={content}
        setVal={setContent}
        styles={reviewInputStyle}
        placeholder="Review"
        icon="pencil"
      />
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
