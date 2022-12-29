// React native
import { StyleSheet } from "react-native";

const listItemStyle = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userImage: {
    flexBasis: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
    flex: 1,
  },
  userInfoNameAction: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  userInfoName: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  userInfoIconStar: {
    marginLeft: "auto",
  },
  userInfoClickHeadingIcon: {
    top: 10,
    left: -4,
  },
  userReview: {
    fontSize: 12.5,
    lineHeight: 16,
  },
  iconActionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 23,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  iconActionText: {
    marginRight: 5,
  },
});

export { listItemStyle };
