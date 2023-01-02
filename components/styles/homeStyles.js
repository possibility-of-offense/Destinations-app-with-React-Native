// React native
import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
    marginTop: 20,
  },

  homeContainer: { paddingBottom: 5, paddingHorizontal: 20, paddingTop: 10 },
  homeContainerHeading: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
    letterSpacing: 1,
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
