import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import TodayTabScreen from "../screens/TodayTabScreen";
import MedicationsTabScreen from "../screens/MedicationsTabScreen";
import {
  BottomTabParamList,
  TodayTabParamList,
  CalendarTabParamList,
  MedicationsTabParamList,
} from "../types";
import CalendarTabScreen from "../screens/CalendarTabScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Today"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        tabStyle: {
          marginBottom: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Today"
        component={TodayTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="checkbox-active" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
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
  return <Fontisto size={18} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TodayTabStack = createStackNavigator<TodayTabParamList>();

function TodayTabNavigator() {
  return (
    <TodayTabStack.Navigator>
      <TodayTabStack.Screen
        name="TodayTabScreen"
        component={TodayTabScreen}
        options={{ headerTitle: "Today" }}
      />
    </TodayTabStack.Navigator>
  );
}

const CalendarTabStack = createStackNavigator<CalendarTabParamList>();

function CalendarTabNavigator() {
  return (
    <CalendarTabStack.Navigator>
      <CalendarTabStack.Screen
        name="CalendarTabScreen"
        component={CalendarTabScreen}
        options={{ headerTitle: "Calendar" }}
      />
    </CalendarTabStack.Navigator>
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
