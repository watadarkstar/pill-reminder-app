import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import AddMedicationFloatingAction from "../components/AddMedicationFloatingAction";

type Props = {
  navigation: any;
};

const MedicationsTabScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medications Screen</Text>
      <AddMedicationFloatingAction navigation={navigation} />
    </View>
  );
};

export default MedicationsTabScreen;

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
