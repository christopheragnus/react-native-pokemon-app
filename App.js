import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import Landing from "./src/Landing";
import Search from "./src/Search";
// import PokeLoader from "./src/PokeLoader";
// import SearchBody from "./src/SearchBody";

export default class App extends Component {
  state = {
    currentScreen: "landing"
  };
  switchScreen = currentScreen => {
    this.setState({ currentScreen });
  };
  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return <Landing switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === "search") {
      return <Search />;
    }
  };

  render() {
    return <View style={styles.container}>{this.renderScreen()}</View>;
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "iOS" ? 24 : 0
  }
};
