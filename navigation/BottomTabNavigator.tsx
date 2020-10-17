import { Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeTabScreen from "../screens/HomeTabScreen";
import AddMedicationScreen from "../screens/AddMedicationScreen";
import MedicationsTabScreen from "../screens/MedicationsTabScreen";
import {
  BottomTabParamList,
  HomeTabParamList,
  MedicationsTabParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors.primary }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Medications"
        component={MedicationsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="pills" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Fontisto size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator
      screenOptions={{
        headerTintColor: Colors.primary,
      }}
    >
      <HomeTabStack.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={{ headerTitle: "Home" }}
      />
      <HomeTabStack.Screen
        name="AddMedicationScreen"
        component={AddMedicationScreen}
        options={{ headerTitle: "Add Medication" }}
      />
    </HomeTabStack.Navigator>
  );
}

const MedicationsTabStack = createStackNavigator<MedicationsTabParamList>();

function MedicationsTabNavigator() {
  return (
    <MedicationsTabStack.Navigator>
      <MedicationsTabStack.Screen
        name="MedicationsTabScreen"
        component={MedicationsTabScreen}
        options={{ headerTitle: "Medications" }}
      />
    </MedicationsTabStack.Navigator>
  );
}
