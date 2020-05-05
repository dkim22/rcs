import * as React from "react";
import { Button } from "react-native-elements";
import { Alert } from "react-native";

export class RegisterConnector extends React.PureComponent {
  onPress = () => {
    Alert.alert("button pressed");
  }

  render() {
    return <Button title="BUTTON" style={{ marginTop: 100 }} onPress={this.onPress} />;
  }
}
