import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  FlatList
} from "react-native";
import { ListItem, List } from "native-base";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

export default class SearchBody extends Component {
  render() {
    let pokemon = this.props.data;
    // if (!pokemon) {
    //   return (
    //     <View>
    //       <Text>No results yet.</Text>
    //     </View>
    //   );
    // }

    return (
      <View style={styles.background}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.header}>
            #{pokemon.id} - {pokemon.name.toUpperCase()}
          </Text>
          <View style={styles.viewStyle}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.img}
            />
          </View>
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Size</Text>
            </ListItem>
            <ListItem>
              <Text>Weight - {pokemon.weight} kg</Text>
            </ListItem>
            <ListItem>
              <Text>Height - {pokemon.height / 10} m</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Abilities</Text>
            </ListItem>
            <FlatList
              data={pokemon.abilities}
              renderItem={({ item }) => (
                <ListItem>
                  <Text>{item.ability.name} </Text>
                </ListItem>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  header: {
    fontSize: 30,
    color: "blue",
    textAlign: "center"
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  img: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: height,
    width: width
  },
  background: {
    backgroundColor: "#FFF886",
    flex: 1
  }
};
