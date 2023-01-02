// React native
import { StyleSheet } from "react-native";

const destinationDetailsStyle = StyleSheet.create({
  image: {
    height: 150,
  },
  headingContainer: {
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 12,
    marginTop: 7,
    textAlign: "center",
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
  },
  galleryContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  galleryContainerHeadingWrapper: {
    padding: 10,
    paddingVertical: 6,
    width: "90%",
    borderRadius: 3,
  },
  galleryContainerHeading: {
    fontSize: 17,
    textAlign: "center",
  },
  galleryContainerHeadingAdditional: {
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  galleryCard: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  reviewsBtnWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 15,
  },
});

export { destinationDetailsStyle };
