import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import CardTitle from "../components/CardTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import AddMedicationFloatingAction from "../components/AddMedicationFloatingAction";

type Props = {
  navigation: any;
};

const TodayTabScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <CardTitle>No Medications</CardTitle>
        <Text style={styles.cardDescription}>
          You have no medications. Add a medication to see your daily
          medications taken.
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

export default TodayTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  cardDescription: {
    marginTop: 10,
    marginBottom: 10,
  },
});
