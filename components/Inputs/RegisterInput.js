// React native
import { View, TextInput, Text } from "react-native";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Components
import AppSeparator from "../Custom/AppSeparator";

const RegisterInput = ({
  checkForErrors,
  error,
  handleChange,
  label,
  placeholder,
  resetSpecificField,
  styles,
  value,
  setFieldTouched,
  secureTextEntry,
  touched,
}) => {
  // Clear input
  const handleIconClick = () => {
    resetSpecificField();
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <TextInput
          style={[styles.inputText, { color: styles.textColors }]}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
          onChangeText={handleChange}
          onBlur={() => setFieldTouched()}
          value={value}
          secureTextEntry={secureTextEntry}
        />
        <MaterialCommunityIcons
          name="close-circle"
          size={24}
          color={styles.textColor}
          onPress={handleIconClick}
        />
      </View>

      {touched && checkForErrors && checkForErrors() ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <AppSeparator />
      )}
    </View>
  );
};

export default RegisterInput;
