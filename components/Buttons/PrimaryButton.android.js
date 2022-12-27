// React native
import { StyleSheet, TouchableHighlight, Text } from "react-native";

// Styles
import { primaryButtonStyles } from "../styles/primaryButtonStyles";

const PrimaryButton = ({
  children,
  backgroundColor,
  textColor,
  underlayColor,
  onPress,
  btnStyles = {},
  textStyles = {},
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor}
      style={[primaryButtonStyles.btn, { backgroundColor, ...btnStyles }]}
    >
      <Text
        style={[primaryButtonStyles.text, { color: textColor, ...textStyles }]}
      >
        {children}
      </Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
