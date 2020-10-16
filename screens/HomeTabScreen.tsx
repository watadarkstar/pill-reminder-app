import { Fontisto } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FloatingAction, IActionProps } from "react-native-floating-action";

import { Text, View } from "../components/Themed";

const actions: Array<IActionProps> = [
  {
    text: "Add Medication",
    icon: <Fontisto name="pills" color="white" />,
    name: "medication",
  },
];

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
