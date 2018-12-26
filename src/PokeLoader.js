import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import LoadingImage from "../assets/icons/loading.gif";

export default class PokeLoader extends Component {
  render() {
    let pokemon = this.props.data;
    if (pokemon !== "undefined") {
      return (
        <View>
          <Text>No results yet.</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Image source={LoadingImage} style={styles.img} />
        </View>
      );
    }
  }
}

const styles = {
  img: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center"
  }
};
