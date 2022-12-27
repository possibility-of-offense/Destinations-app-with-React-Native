// React native
import { StyleSheet } from "react-native";

// Colors
import colors from "../../config/colors";

const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },
  bottomFixedContainer: {
    width: `100%`,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.primaryDark,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    zIndex: 1,
  },
  bottomFixedContainerText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
  },
  homeContainer: { paddingBottom: 100, paddingHorizontal: 20, paddingTop: 10 },
  homeContainerHeading: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
});

export { homeStyles };
