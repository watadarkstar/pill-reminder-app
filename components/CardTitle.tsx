import * as React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {};

const CardTitle: React.FC<Props> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default CardTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
