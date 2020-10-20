import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "react-query";

import Spinner from "../components/Spinner";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Button from "../components/Button";

type MedicationListProps = {
  isLoading: boolean;
  data: any;
  error: any;
};

type MedicationListItemProps = {
  text: string;
};

const MedicationListItem: React.FC<MedicationListItemProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.medicationItem}>
      <Text style={styles.medicationText}>{text}</Text>
    </TouchableOpacity>
  );
};

const MedicationsList: React.FC<MedicationListProps> = ({
  data,
  error,
  isLoading,
}) => {
  if (isLoading) return <Spinner />;

  if (error) return <Text>{`An error has occurred: ${error.message}`}</Text>;

  if (!data || data?.length < 2) {
    return null;
  }

  const results = data[1];
  return results.map((medication: string) =>
    medication ? (
      <MedicationListItem key={medication} text={medication} />
    ) : null
  );
};

type Props = {
  navigation: any;
};

const API_URL = "https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search";
const MAX_LIST = 50;
const AddMedicationScreen: React.FC<Props> = ({ navigation }) => {
  const [medication, setMedication] = useState("");
  const { isLoading, error, data } = useQuery(`search${medication}`, () => {
    if (!medication.length) return undefined;

    return fetch(
      `${API_URL}?terms=${medication}&maxList=${MAX_LIST}`
    ).then((res) => res.json());
  });

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text style={styles.label}>Medication Name</Text>
        <TextInput
          placeholder="Medication"
          style={styles.input}
          onChangeText={(text) => setMedication(text)}
          value={medication}
        />
        {medication !== "" && <MedicationListItem text={medication} />}
        <MedicationsList data={data} isLoading={isLoading} error={error} />
      </Card>
      <Button
        text="Add Medication"
        onPress={() => navigation.navigate("AddMedication")}
      />
    </ScrollView>
  );
};

export default AddMedicationScreen;

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
