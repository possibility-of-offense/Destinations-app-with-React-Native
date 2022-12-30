// React native
import { View, TextInput, Text } from "react-native";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RegisterInput = ({
  error,
  handleChange,
  label,
  placeholder,
  resetSpecificField,
  styles,
  value,
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
          value={value}
        />
        <MaterialCommunityIcons
          name="close-circle"
          size={24}
          color={styles.textColor}
          onPress={handleIconClick}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default RegisterInput;
