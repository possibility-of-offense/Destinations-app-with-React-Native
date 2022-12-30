// Hooks
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useState, useEffect, useRef } from "react";

// React native
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

// Data
import data from "../../data/destinationsData.json";

// Styles
import { destinationDetailsStyle } from "../styles/destinationDetailsStyle";

// Colors
import colors from "../../config/colors";
import PrimaryButton from "../Buttons/PrimaryButton.android";

const DestinationDetailsScreen = ({ navigation, route }) => {
  const orientation = useDeviceOrientation();
  const [detailsData, setDetailsData] = useState({});
  const [showGallery, setShowGallery] = useState(false);

  const scrollViewRef = useRef();

  useEffect(() => {
    const findDestination = data?.destinations.find(
      (dest) => dest.id === route.params.id
    );

    setDetailsData(findDestination);
  }, []);

  // Show gallery
  const handleShowGallery = () => {
    setShowGallery((prev) => !prev);
  };

  // Content change
  const handleContentChange = (width, height) => {
    scrollViewRef.current?.scrollTo({
      y: showGallery ? 500 : 0,
      x: 0,
      animated: true,
    });
  };

  return (
    <ScrollView ref={scrollViewRef} onContentSizeChange={handleContentChange}>
      <Image
        source={{ uri: detailsData.url }}
        style={
          ([destinationDetailsStyle.image],
          { height: orientation.portrait ? 300 : 450 })
        }
      />
      <View style={destinationDetailsStyle.headingContainer}>
        <Text style={destinationDetailsStyle.heading}>
          Details about {route.params.title}
        </Text>
        <Text style={destinationDetailsStyle.description}>
          {detailsData.fullDescription}
        </Text>
        <PrimaryButton
          backgroundColor={colors.primaryDark}
          textColor={colors.white}
          underlayColor={colors.secondaryDark}
          btnStyles={{ marginTop: 25 }}
          onPress={() =>
            navigation.navigate("Reviews", {
              title: route.params.title,
              id: detailsData.id,
            })
          }
        >
          Reviews
        </PrimaryButton>
      </View>

      <View style={destinationDetailsStyle.galleryContainer}>
        <TouchableHighlight
          style={[
            destinationDetailsStyle.galleryContainerHeadingWrapper,
            {
              backgroundColor: colors.primaryGreen,
              marginBottom: showGallery ? 20 : 0,
            },
          ]}
          onPress={handleShowGallery}
          underlayColor={colors.secondaryGreen}
        >
          <View>
            <Text
              style={[
                destinationDetailsStyle.galleryContainerHeading,
                { color: colors.white },
              ]}
            >
              Gallery
            </Text>
            <Text
              style={[
                destinationDetailsStyle.galleryContainerHeadingAdditional,
                { color: colors.white },
              ]}
            >
              (click to {showGallery ? "hide" : "show"} gallery)
            </Text>
          </View>
        </TouchableHighlight>

        {showGallery &&
          detailsData.popularImages?.length > 0 &&
          detailsData.popularImages.map((img, i) => (
            <TouchableOpacity
              key={img.id}
              onPress={() =>
                navigation.navigate("Gallery Image", {
                  id: detailsData.id,
                  imageId: img.id,
                  url: img.url,
                  title: route.params.title,
                })
              }
            >
              <Image
                source={{ uri: img.url }}
                style={[
                  destinationDetailsStyle.galleryCard,
                  { height: orientation.portrait ? 200 : 450 },
                ]}
              />
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};

export default DestinationDetailsScreen;
