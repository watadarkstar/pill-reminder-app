import { Fontisto } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "../components/Themed";
import AddMedicationFloatingAction from "../components/AddMedicationFloatingAction";

type Props = {
  navigation: any;
};

const TodayTabScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today Screen</Text>
      <AddMedicationFloatingAction navigation={navigation} />
    </View>
  );
};

export default TodayTabScreen;

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
