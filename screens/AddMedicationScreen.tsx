import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "react-query";

import Colors from "../constants/Colors";
import { Text, View } from "../components/Themed";

type MedicationListProps = {
  isLoading: boolean;
  data: any;
  error: any;
};
const MedicationsList: React.FC<MedicationListProps> = ({
  data,
  error,
  isLoading,
}) => {
  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>{`An error has occurred: ${error.message}`}</Text>;

  if (!data || data?.length < 2) {
    return null;
  }

  const results = data[1];
  return results.map((drug: string) => (
    <TouchableOpacity key={drug} style={styles.medicationItem}>
      <Text style={styles.medicationText}>{drug}</Text>
    </TouchableOpacity>
  ));
};

const API_URL = "https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search";
const MAX_LIST = 100;
export default function AddMedicationScreen() {
  const [medication, setMedication] = useState("");
  const { isLoading, error, data } = useQuery(`search${medication}`, () => {
    if (!medication.length) return undefined;

    return fetch(`${API_URL}?terms=${medication}&maxList=100`).then((res) =>
      res.json()
    );
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>What medication would like to add?</Text>
      <TextInput
        placeholder="Medication"
        style={styles.input}
        onChangeText={(text) => setMedication(text)}
        value={medication}
      />
      <MedicationsList data={data} isLoading={isLoading} error={error} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  input: {
    padding: 10,
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  medicationItem: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: Colors.gray,
    borderBottomWidth: 1,
  },
  medicationText: {
    fontSize: 15,
  },
});
