// React native
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

// Hooks
import { useState } from "react";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Styles
import { reviewInputStyle } from "../styles/reviewInputStyle";

// Colors
import colors from "../../config/colors";
import ListItemRating from "../ListItem/ListItemRating";

const AppPicker = ({ data, rating: ratingParent, setRating }) => {
  const { inputWrapper, input } = reviewInputStyle;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={inputWrapper}>
          <MaterialCommunityIcons
            name="star-outline"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <View style={input}>
            <Text style={{ fontSize: 18, color: "#a8a7a7" }}>
              {ratingParent === 0 ? "Rating" : ratingParent}
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-down" color="#333" size={24} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          Pick a rating
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <ListItemRating
              cbs={[
                { call: setRating, value: item },
                { call: setShowModal, value: false },
              ]}
            >
              {item}
            </ListItemRating>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: colors.primaryGreen,
              }}
            ></View>
          )}
        />
        <Button
          color={colors.primaryGreen}
          title="Close"
          onPress={() => setShowModal(false)}
        />
      </Modal>
    </>
  );
};

export default AppPicker;
