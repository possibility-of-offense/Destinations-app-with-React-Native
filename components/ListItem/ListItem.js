// React hooks
import { Fragment, useState } from "react";

// React native
import { View, Text, Image } from "react-native";

// Styles
import { listItemStyle } from "../styles/listItemStyle";

// Colors
import colors from "../../config/colors";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({ item }) {
  const originalReview = item.text;
  const cutReview = item.text.split(" ").slice(0, 30).join(" ") + "...";

  const [showFullReview, setShowFullReview] = useState(false);

  const handleTogglingReviewContent = () => setShowFullReview((prev) => !prev);

  return (
    <View style={listItemStyle.listItem}>
      <Image style={listItemStyle.userImage} source={{ uri: item.image }} />
      <View style={listItemStyle.userInfo}>
        <Text style={listItemStyle.userInfoName}>{item.name}</Text>
        <Text style={listItemStyle.userReview}>
          {showFullReview ? originalReview : cutReview}
        </Text>
        <Text onPress={handleTogglingReviewContent} style={{ marginTop: 15 }}>
          <View
            style={[
              listItemStyle.iconActionWrapper,
              { backgroundColor: colors.primaryGreen },
            ]}
          >
            <Text
              style={[
                listItemStyle.iconActionText,
                { color: colors.primaryDark },
              ]}
            >
              {showFullReview ? "Show less content" : "Show full content"}
            </Text>
            {showFullReview ? (
              <MaterialCommunityIcons
                name="chevron-up-box"
                size={24}
                color={colors.primaryDark}
              />
            ) : (
              <MaterialCommunityIcons
                name="chevron-down-box"
                size={24}
                color={colors.primaryDark}
              />
            )}
          </View>
        </Text>
      </View>
    </View>
  );
}

export default ListItem;
