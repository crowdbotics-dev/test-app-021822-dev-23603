import { ImageBackground } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      left: 58,
      top: 80,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text><ImageBackground style={{
      left: 18,
      top: 140,
      position: "absolute",
      width: 152,
      height: 101
    }} source={{
      uri: "data:image/png;base64,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"
    }} resizeMode="cover"></ImageBackground><View style={{
      left: 34,
      top: 266,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View></View>;
};

export default Untitled2;