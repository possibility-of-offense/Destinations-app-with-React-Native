// React Native
import { StyleSheet } from "react-native";

export const reviewInputStyle = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
  },
  registerBtn: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  registerBtnText: {
    marginTop: 6,
    padding: 3,
    paddingHorizontal: 14,
    borderRadius: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#f4f4f4",
    borderRadius: 25,
    marginVertical: 5,
    paddingHorizontal: 8,
  },
  input: {
    padding: 10,
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
  error: {
    color: "red",
    marginLeft: 26,
    marginBottom: 5,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  fullname: {
    marginLeft: 30,
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
