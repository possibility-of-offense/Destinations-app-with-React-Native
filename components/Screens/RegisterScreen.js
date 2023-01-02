// React native
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Clipboard,
} from "react-native";

// React hooks
import { useContext, useMemo, useState } from "react";

// Components
import PrimaryButton from "../Buttons/PrimaryButton.android";
import RegisterInput from "../Inputs/RegisterInput";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Styles
import { registerStyle } from "../styles/registerStyle";

// Colors
import colors from "../../config/colors";

// Formik
import { Formik } from "formik";
// Yup
import * as Yup from "yup";
import { useCallback } from "react";

// Context
import { AuthContext } from "../Context/AuthContext";

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("This field is required")
    .min(6, "You need 6 characters minimum")
    .label("Fullname"),
  password: Yup.string()
    .required("This field is required")
    .min(4, "You need 4 characters minimum")
    .label("Password"),
  repeatPassword: Yup.string()
    .required("Repeat password should match password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  url: Yup.string()
    .required("The image url field is required")
    .min(20, "Minimum of 20 characters")
    .matches(/(http|https)[^s]+/, "The url should start with http or https")
    .label("Image url"),
});

const RegisterScreen = ({ navigation, route }) => {
  // Mock photo urls
  const photosUrls = useMemo(
    () => ({
      urls: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
      ],
    }),
    []
  );

  // context
  const authContext = useContext(AuthContext);

  const checkForErrors = useCallback((errors, error) => {
    return errors[error] ? true : false;
  }, []);

  // Handle image click to copy it to clipboard
  const handleCopyToClipboard = (img) => {
    Clipboard.setString(img);
  };

  // submission
  const handleSubmit = (values) => {
    authContext.setUser({
      fullname: values.fullname,
      url: values.url,
    });
    navigation.navigate("Add review", {
      user: {
        fullname: values.fullname,
        url: values.url,
      },
      id: route.params.id,
    });
  };

  return (
    <ScrollView>
      <View style={registerStyle.headingContainer}>
        <Text style={registerStyle.heading}>Register</Text>
        <MaterialCommunityIcons
          style={registerStyle.registerIcon}
          name="login"
          size={24}
          color="black"
        />
      </View>
      <View style={registerStyle.form}>
        <Formik
          initialValues={{
            fullname: "",
            password: "",
            repeatPassword: "",
            url: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            values,
            resetForm,
            setFieldTouched,
            touched,
          }) => (
            <>
              <RegisterInput
                checkForErrors={() => checkForErrors(errors, "fullname")}
                error={errors.fullname}
                handleChange={handleChange("fullname")}
                label="Enter fullname/username"
                placeholder="Enter fullname"
                resetSpecificField={() =>
                  resetForm({
                    values: {
                      fullname: "",
                      password: values.password,
                      repeatPassword: values.repeatPassword,
                      url: values.url,
                    },
                    errors,
                  })
                }
                setFieldTouched={() => setFieldTouched("fullname")}
                styles={{ ...registerStyle, textColor: colors.secondaryDark }}
                value={values.fullname}
                touched={touched.fullname}
              />
              <RegisterInput
                checkForErrors={() => checkForErrors(errors, "password")}
                error={errors.password}
                handleChange={handleChange("password")}
                label="Enter password"
                placeholder="Enter password"
                resetSpecificField={() =>
                  resetForm({
                    values: {
                      fullname: values.fullname,
                      password: "",
                      repeatPassword: values.repeatPassword,
                      url: values.url,
                    },
                    errors,
                  })
                }
                setFieldTouched={() => setFieldTouched("password")}
                styles={registerStyle}
                value={values.password}
                touched={touched.password}
                secureTextEntry={true}
              />
              <RegisterInput
                checkForErrors={() => checkForErrors(errors, "repeatPassword")}
                error={errors.repeatPassword}
                handleChange={handleChange("repeatPassword")}
                label="Repeat password"
                placeholder="Repeat password"
                resetSpecificField={() =>
                  resetForm({
                    values: {
                      fullname: values.fullname,
                      password: values.password,
                      repeatPassword: "",
                      url: values.url,
                    },
                    errors,
                  })
                }
                styles={registerStyle}
                value={values.repeatPassword}
                setFieldTouched={() => setFieldTouched("repeatPassword")}
                touched={touched.repeatPassword}
                secureTextEntry={true}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  textAlign: "center",
                  marginBottom: 7,
                }}
              >
                Click on the of the images to copy the url to the clipboard and
                to paste it or enter manually the url address in the input
              </Text>
              <View style={registerStyle.photosGrid}>
                {photosUrls.urls.map((photo) => (
                  <TouchableOpacity
                    key={photo}
                    onPress={() => handleCopyToClipboard(photo)}
                    style={{ marginRight: "auto" }}
                  >
                    <Image
                      style={registerStyle.photosGridImage}
                      source={{
                        uri: photo,
                      }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <RegisterInput
                error={errors.url}
                handleChange={handleChange("url")}
                label="Image url"
                placeholder="Image url"
                resetSpecificField={() =>
                  resetForm({
                    values: {
                      fullname: values.fullname,
                      password: values.password,
                      repeatPassword: values.repeatPassword,
                      url: "",
                    },
                    errors,
                  })
                }
                setFieldTouched={() => setFieldTouched("url")}
                styles={registerStyle}
                value={values.url}
                touched={touched.url}
              />

              <PrimaryButton
                backgroundColor={colors.primaryGreen}
                textColor={colors.white}
                textStyles={registerStyle.registerBtnText}
                btnStyles={registerStyle.registerBtn}
                onPress={handleSubmit}
              >
                Register
              </PrimaryButton>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
