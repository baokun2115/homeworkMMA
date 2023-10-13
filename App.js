import * as React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const Stack = createNativeStackNavigator();
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="HomePage" component={WelcomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>

      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
