import { Fontisto } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FloatingAction, IActionProps } from "react-native-floating-action";

import Colors from "../constants/Colors";

const actions: Array<IActionProps> = [
  {
    text: "Add Medication",
    icon: <Fontisto name="pills" color="white" />,
    name: "AddMedication",
    color: Colors.primary,
  },
];

type Props = {
  navigation: any;
};

const AddMedicationFloatingAction: React.FC<Props> = ({ navigation }) => {
  return (
    <FloatingAction
      actions={actions}
      color={Colors.primary}
      onPressItem={(name) => {
        console.log(`selected button: ${name}`);
        navigation.navigate(name);
      }}
    />
  );
};

export default AddMedicationFloatingAction;

const styles = StyleSheet.create({});
