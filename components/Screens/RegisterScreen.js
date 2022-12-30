// React native
import { View, Text, ScrollView } from "react-native";

// React hooks
import { useContext } from "react";

// Components
import PrimaryButton from "../Buttons/PrimaryButton.android";
import RegisterInput from "../Inputs/RegisterInput";
import AppSeparator from "../Custom/AppSeparator";

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
  // context
  const authContext = useContext(AuthContext);

  const checkForErrors = useCallback((errors, error) => {
    return errors[error] ? true : false;
  }, []);

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
          {({ handleChange, handleSubmit, errors, values, resetForm }) => (
            <>
              <RegisterInput
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
                styles={{ ...registerStyle, textColor: colors.secondaryDark }}
                value={values.fullname}
              />
              {!checkForErrors(errors, "fullname") && <AppSeparator />}
              <RegisterInput
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
                styles={registerStyle}
                value={values.password}
              />
              {!checkForErrors(errors, "password") && <AppSeparator />}
              <RegisterInput
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
              />
              {!checkForErrors(errors, "url") && <AppSeparator />}
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
                styles={registerStyle}
                value={values.url}
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
