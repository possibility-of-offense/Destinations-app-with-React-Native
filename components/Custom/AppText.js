import { Text, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 40,
        fontFamily: "serif",
      },
    }),
    fontStyle: "italic",
    color: "gold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
