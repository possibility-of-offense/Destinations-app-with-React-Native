// React native
import { StyleSheet } from "react-native";

// Colors
import colors from "../../config/colors";

const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },

  homeContainer: { paddingBottom: 20, paddingHorizontal: 20, paddingTop: 10 },
  homeContainerHeading: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainerText: {
    fontWeight: "bold",
    marginRight: 8,
  },
  switchContainerToggler: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export { homeStyles };
