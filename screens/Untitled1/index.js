import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = props => {
  return <View style={{
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <Pressable onPress={() => props.navigation.navigate("Untitled5")} style={{
      position: "initial",
      width: "195px",
      height: "350px",
      marginLeft: "-10px",
      marginTop: "-10px"
    }}>
        <Text style={{
        left: 50,
        top: 121,
        position: "absolute",
        width: 100,
        height: 50,
        lineHeight: 14,
        fontSize: 14,
        borderRadius: 0
      }}>
          This is pressable
        </Text>
      </Pressable>
    </View>;
};

export default Untitled1;