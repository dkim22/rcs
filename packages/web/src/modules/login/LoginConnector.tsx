import * as React from "react";
import { LoginController } from "@abb/controller";
import { RouteComponentProps } from "react-router-dom";

import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.PureComponent<RouteComponentProps<{}>> {
  onFinish = () => {
    const { history, location: { state }}: any = this.props;
    if (state?.next) {
      return history.push(state.next);
    }
    
    history.push("/");
  }

  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
      </LoginController>
    );
  }
}
