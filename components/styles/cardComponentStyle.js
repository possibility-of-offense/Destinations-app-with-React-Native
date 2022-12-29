// React native
import { StyleSheet } from "react-native";

// Colors
import colors from "../../config/colors";

export const cardComponentStyles = StyleSheet.create({
  card: {
    borderRadius: 11,
    backgroundColor: "#ddd",
    overflow: "hidden",
    marginVertical: 10,
  },
  cardImage: { width: "100%" },
  cardTextContainer: {
    padding: 15,
  },
  cardHeading: {
    fontSize: 20,
    paddingBottom: 5,
    textDecorationLine: "underline",
  },
  cardSubtitle: {
    color: "#333",
  },
});
