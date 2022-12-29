// React native
import { View, Text, TextInput } from "react-native";

// React hooks
import { useState } from "react";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddReviewScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          backgroundColor: "#f4f4f4",
          borderRadius: 25,
          padding: 10,
          marginVertical: 10,
        }}
      >
        <MaterialCommunityIcons name="face-man" color="#333" size={24} />
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 30,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First name"
            style={{ fontSize: 18 }}
          />
          {firstName && (
            <MaterialCommunityIcons
              onPress={() => setFirstName("")}
              name="close-circle"
              color="#333"
              size={24}
              style={{ position: "absolute", right: 0 }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default AddReviewScreen;
