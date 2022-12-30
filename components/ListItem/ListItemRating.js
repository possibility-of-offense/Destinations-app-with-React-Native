// React native
import { View, Text } from "react-native";

// Styles
import { listItemRatingStyle } from "../styles/listItemRatingStyle";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemRating = ({ children, cbs }) => {
  // Handle callbacks
  const handleCallbacks = () => {
    cbs.forEach((cb) => cb.call(cb.value));
  };

  return (
    <View style={listItemRatingStyle.listItem}>
      <Text
        style={listItemRatingStyle.listItemContent}
        onPress={handleCallbacks}
      >
        {children}
      </Text>
    </View>
  );
};

export default ListItemRating;
