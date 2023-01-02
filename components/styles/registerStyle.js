// React native
import { StyleSheet } from "react-native";

export const registerStyle = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerIcon: {
    marginLeft: 5,
    top: 1,
  },
  form: {
    marginHorizontal: 15,
  },
  registerBtnText: {
    fontSize: 17,
  },
  registerBtn: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    padding: 5,
    flex: 1,
  },
  label: {
    marginLeft: 5,
    marginBottom: 5,
  },
  error: {
    color: "red",
    marginVertical: 6,
    fontStyle: "italic",
    marginLeft: 3,
  },
  photosGrid: {
    marginBottom: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  photosGridImage: {
    height: 60,
    width: 60,
    margin: 3,
    marginVertical: 6,
    // marginRight: "auto",
  },
});
