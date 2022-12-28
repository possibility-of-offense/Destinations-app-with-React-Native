// React native
import { View, ImageBackground, StyleSheet, Image } from "react-native";

// Hooks
import { useEffect, useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Colors
import colors from "../../config/colors";

// Data
import data from "../../data/destinationsData.json";

const GalleryImageScreen = ({ navigation, route }) => {
  const orientation = useDeviceOrientation();

  const [gallery, setGallery] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: `Image about ${route.params.title}`,
    });

    const findDest = data.destinations.find(
      (dest) => dest.id === route.params.id
    );

    setGallery(findDest.popularImages);
    setCurrentImage(
      findDest.popularImages.find((i) => i.id === route.params.imageId)
    );
  }, [route.params.imageId]);

  const handleNavigate = (id, next = false) => {
    let currentElementIndex;
    let currentElement = gallery.find((e) => e.id === route.params.imageId);

    if (next) {
      setShowPrev(true);
      if (currentElement) {
        currentElementIndex = gallery.findIndex(
          (e) => e.id === currentElement?.id
        );
        currentElementIndex = currentElementIndex + 1;

        navigation.navigate("Gallery Image", {
          id: route.params.id,
          imageId: gallery[currentElementIndex].id,
          url: gallery[currentElementIndex].url,
          title: route.params.title,
        });
        if (gallery.length - 1 === currentElementIndex) setShowNext(false);
      }
    } else {
      setShowNext(true);
      if (currentElement) {
        currentElementIndex = gallery.findIndex(
          (e) => e.id === currentElement?.id
        );
        currentElementIndex = currentElementIndex - 1;
        if (currentElementIndex >= 0) {
          navigation.navigate("Gallery Image", {
            id: route.params.id,
            imageId: gallery[currentElementIndex].id,
            url: gallery[currentElementIndex].url,
            title: route.params.title,
          });

          if (currentElementIndex === 0) setShowPrev(false);
        }
      }
    }
  };

  return (
    <View style={{ flex: orientation.portrait ? 0.6 : 1 }}>
      <View style={styles.buttonsWrapper}>
        {showPrev && (
          <MaterialCommunityIcons
            name="chevron-left-box-outline"
            size={30}
            color={colors.white}
            style={{ marginRight: "auto" }}
            onPress={handleNavigate.bind(null, route.params.id, false)}
          />
        )}
        {showNext && (
          <MaterialCommunityIcons
            name="chevron-right-box-outline"
            size={30}
            color={colors.white}
            style={{ marginLeft: "auto" }}
            onPress={handleNavigate.bind(null, route.params.id, true)}
          />
        )}
      </View>
      <Image source={{ uri: route.params.url }} style={{ height: 300 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primaryDark,
    padding: 4,
  },
});

export default GalleryImageScreen;
