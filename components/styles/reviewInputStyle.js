// React Native
import { StyleSheet } from "react-native";

export const reviewInputStyle = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#f4f4f4",
    borderRadius: 25,
    padding: 10,
    marginVertical: 5,
  },
  input: {
    paddingLeft: 15,
    paddingRight: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputIcon: {
    fontSize: 18,
  },
  inputDeleteTextIcon: { position: "absolute", right: 0 },
});
