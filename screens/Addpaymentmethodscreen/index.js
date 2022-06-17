import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AddPaymentMethodScreen = params => {
  return <View style={styles.container}>
      <Text style={{
      transform: "rotate(6deg)",
      top: 146,
      left: 0
    }}>Add Payment Method Screen</Text>
    <View style={{
      left: 16,
      top: 29,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View></View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  }
});
export default AddPaymentMethodScreen;