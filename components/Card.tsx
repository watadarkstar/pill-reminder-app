import * as React from "react";
import { StyleSheet, View } from "react-native";

type Props = {};

const Card: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
