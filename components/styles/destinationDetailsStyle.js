// React native
import { StyleSheet } from "react-native";

const destinationDetailsStyle = StyleSheet.create({
  image: {
    height: 150,
  },
  headingContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
  },
  galleryContainer: {
    flex: 1,
    width: "100%",
  },
  galleryContainerHeadingWrapper: {
    padding: 10,
    marginTop: 12,
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
});

export { destinationDetailsStyle };
