// React native
import { View, TextInput } from "react-native";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = ({ val, setVal, styles, placeholder, icon }) => {
  const { inputWrapper, input, inputIcon, inputDeleteTextIcon } = styles;
  return (
    <View style={inputWrapper}>
      <MaterialCommunityIcons name={icon} color="#333" size={24} />
      <View style={input}>
        <TextInput
          value={val}
          onChangeText={(text) => setVal(text)}
          placeholder={placeholder}
          style={inputIcon}
        />
        {val && (
          <MaterialCommunityIcons
            onPress={() => setVal("")}
            name="close-circle"
            color="#333"
            size={24}
            style={inputDeleteTextIcon}
          />
        )}
      </View>
    </View>
  );
};

export default Input;
