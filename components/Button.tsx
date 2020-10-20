import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import Colors from "../constants/Colors";

type Props = {
  text: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: Colors.primary,
  },
});
