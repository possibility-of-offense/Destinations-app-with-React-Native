// React native
import { StyleSheet } from "react-native";

// Colors
import colors from "../../config/colors";

export const reviewsByUserStyle = StyleSheet.create({
  heading: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  list: {
    padding: 5,
  },
  swipeableContainer: {
    backgroundColor: colors.primaryDark,
    borderRadius: 4,
    marginVertical: 3,
  },
  swipeableAction: {
    padding: 7,
    backgroundColor: colors.primaryGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 10,
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  listItemContent: {
    color: colors.white,
    fontSize: 13,
    letterSpacing: 0.2,
    marginLeft: 7,
  },
  listItemContentDestinationUrl: {
    textDecorationLine: "underline",
  },
});
