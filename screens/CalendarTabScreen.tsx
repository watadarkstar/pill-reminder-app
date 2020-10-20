import { Fontisto } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { IActionProps } from "react-native-floating-action";
import { Agenda } from "react-native-calendars";

import Colors from "../constants/Colors";
import AddMedicationFloatingAction from "../components/AddMedicationFloatingAction";

const actions: Array<IActionProps> = [
  {
    text: "Add Medication",
    icon: <Fontisto name="pills" color="white" />,
    name: "AddMedicationScreen",
    color: Colors.primary,
  },
];

type Props = {
  navigation: any;
};

const items = {
  "2020-10-15": [{ name: "item 1 - any js object" }],
  "2012-05-23": [{ name: "item 2 - any js object", height: 80 }],
  "2012-05-24": [],
  "2012-05-25": [{ name: "item 3 - any js object" }, { name: "any js object" }],
};

const calendarTheme = {
  dotColor: Colors.primary,
  todayTextColor: Colors.primary,
  selectedDotColor: Colors.white,
  selectedDayBackgroundColor: Colors.primary,
};

const CalendarTabScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={items}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <View />;
        }}
        selected={"2020-10-15"}
        style={styles.agenda}
        theme={calendarTheme}
      />
      <AddMedicationFloatingAction navigation={navigation} />
    </View>
  );
};

export default CalendarTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  agenda: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
