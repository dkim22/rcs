import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordView } from "./ui/ChangePasswordView";
import { ChangePasswordController } from "@abb/controller";

export class ChangePasswordConnector extends React.PureComponent<
  RouteComponentProps<{ key: string }>
  > {
  render() {
    const {
      match: {
        params: { key },
      },
    } = this.props;

    return (
      <ChangePasswordController>
        {({ submit }) => (
          <ChangePasswordView
            submit={async ({ newPassword }) => submit({ key, newPassword })}
          />
        )}
      </ChangePasswordController>
    );
  }
}
