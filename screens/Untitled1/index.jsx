import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 9.55926513671875,
      top: 15.70648193359375,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}><Text style={{
        left: 53,
        top: 20,
        position: "absolute",
        width: 100,
        height: 50,
        lineHeight: 14,
        fontSize: 14,
        borderRadius: 0
      }}>Custom Text! ipsum… </Text></View></View>;
};

export default Untitled1;