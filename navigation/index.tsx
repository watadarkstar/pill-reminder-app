import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import AddMedicationScreen from "../screens/AddMedicationScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList, AddMedicationTabParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

const MyTheme = {
  ...DefaultTheme,
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const AddMedicationTabStack = createStackNavigator<AddMedicationTabParamList>();

function AddMedicationNavigator() {
  return (
    <AddMedicationTabStack.Navigator>
      <AddMedicationTabStack.Screen
        name="AddMedicationScreen"
        component={AddMedicationScreen}
        options={{ headerTitle: "Add Medication" }}
      />
    </AddMedicationTabStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="AddMedication"
        component={AddMedicationNavigator}
        options={{ title: "Add Medication" }}
      />
    </Stack.Navigator>
  );
}
