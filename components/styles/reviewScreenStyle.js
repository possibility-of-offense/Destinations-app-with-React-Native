// React native
import { StyleSheet } from "react-native";

// Colors
import colors from "../../config/colors";

export const reviewScreenStyle = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    paddingBottom: 15,
    fontWeight: "500",
    borderBottomColor: colors.primaryGreen,
    borderBottomWidth: 1,
  },
  list: {
    paddingHorizontal: 15,
    paddingTop: 14,
  },
  listItem: {
    padding: 10,
  },
});
