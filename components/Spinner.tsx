import * as React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

type Props = {};

const Spinner: React.FC<Props> = ({ children }) => {
  return <ActivityIndicator style={styles.spinner} />;
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    margin: 20,
  },
});
