import { Fontisto } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FloatingAction, IActionProps } from "react-native-floating-action";

import { Text, View } from "../components/Themed";

const actions: Array<IActionProps> = [
  {
    text: "Add Medication",
    icon: <Fontisto name="pills" color="white" />,
    name: "AddMedicationScreen",
  },
];

type Props = {
  navigation: any;
};

const HomeTabScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
          navigation.navigate(name);
        }}
      />
    </View>
  );
};

export default HomeTabScreen;

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
