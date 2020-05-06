import * as React from "react";
import { LoginController } from "@abb/controller";
import * as SecureStore from "expo-secure-store";
import { LoginView } from "./ui/LoginView";
import { SID_KEY } from "../shared/constants";

export class LoginConnector extends React.PureComponent {
  saveSessionId = async (sid: string) => {
    SecureStore.setItemAsync(SID_KEY, sid);
  }

  render() {
    return (
      <LoginController onSessionId={this.saveSessionId}>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
