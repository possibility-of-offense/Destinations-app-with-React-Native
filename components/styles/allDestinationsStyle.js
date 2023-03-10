// React native
import { StyleSheet } from "react-native-web";

// Colors
import colors from "../../config/colors";

export const allDesnationsStyles = StyleSheet.create({
  screenHeading: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 18,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
  cardsContainerInner: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
  },
  container: {
    marginHorizontal: "1%",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.primaryGreen,
    elevation: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  img: {
    height: 200,
    width: "100%",
  },
  textContainer: {
    padding: 5,
    marginTop: "auto",
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 17,
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    color: "#333",
    fontSize: 13,
    textAlign: "center",
  },
  checkButtonText: {
    fontSize: 14,
  },
  checkButton: {
    padding: 6,
    marginTop: "auto",
    width: "auto",
    alignSelf: "center",
  },
});
