// React native
import { View, ImageBackground } from "react-native";

// Hooks
import { useEffect } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

const GalleryImageScreen = ({ navigation, route }) => {
  const orientation = useDeviceOrientation();

  useEffect(() => {
    navigation.setOptions({
      title: `Image about ${route.params.title}`,
    });
  }, []);

  return (
    <View style={{ flex: orientation.portrait ? 0.8 : 1 }}>
      <ImageBackground source={{ uri: route.params.url }} style={{ flex: 1 }} />
    </View>
  );
};

export default GalleryImageScreen;
