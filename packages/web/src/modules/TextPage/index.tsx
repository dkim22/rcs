import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface LocationState {
  message: string;
}

export class TextPage extends React.PureComponent<RouteComponentProps<{}, {}, LocationState>> {
  render() {
    const { location: { state } } = this.props;
    return <h2>{state?.message ? state.message : "hello"}</h2>;
  }
}
