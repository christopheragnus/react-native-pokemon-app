import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Item, Icon, Input, Button } from "native-base";
import SearchBody from "./SearchBody";
import PokeLoader from "./PokeLoader";
import axios from "axios";

export default class Search extends Component {
  state = {
    pokeSearch: "",
    onCall: true,
    data: {}
  };
  searchPoke = () => {
    this.setState({ onCall: true });
    var self = this;
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/" +
          this.state.pokeSearch.toLowerCase() +
          "/"
      )
      .then(response => {
        console.log(response.data);
        self.setState({ data: response.data });
        self.setState({ onCall: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader data={this.state.data} />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header searchBar rounded>
          <Item>
            <Icon type="Ionicons" name="search" onPress={this.searchPoke} />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search Pokemon"
              onChangeText={pokeSearch => this.setState({ pokeSearch })}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}
