import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import CardTitle from "../components/CardTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import AddMedicationFloatingAction from "../components/AddMedicationFloatingAction";

type Props = {
  navigation: any;
};

const MedicationsTabScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <CardTitle>No Medications</CardTitle>
        <Text style={styles.cardDescription}>
          You have no medications. Add a medication to see all your medications
          on this screen.
        </Text>
        <Button
          text="Add Medication"
          onPress={() => navigation.navigate("AddMedication")}
        />
      </Card>
      <AddMedicationFloatingAction navigation={navigation} />
    </View>
  );
};

export default MedicationsTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDescription: {
    marginTop: 10,
    marginBottom: 10,
  },
});
