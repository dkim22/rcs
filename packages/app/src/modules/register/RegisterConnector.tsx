import * as React from "react";
import { Alert } from "react-native";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    Alert.alert(values);
    return null;
  }

  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}
