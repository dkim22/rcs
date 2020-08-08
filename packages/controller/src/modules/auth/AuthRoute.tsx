import * as React from "react";
import { RouteProps, RouteComponentProps, Route, Redirect } from "react-router";
import { graphql, gql, ChildProps } from "@apollo/react-hoc";
import { MeQuery } from "../../schemaTypes";

type Props = RouteProps;

export class C extends React.PureComponent<ChildProps<Props, MeQuery>> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props;

    if (!data || data.loading) {
      // loading screen
      return null;
    }

    if (!data.me) {
      // user not logged in
      return <Redirect to={{ pathname: "/login", state: { next: routeProps.location.pathname } }} />;
    }

    const Component = component as any;

    return <Component {...routeProps} />;
  }

  render() {
    const { data: _, component: __, ...rest } = this.props;

    return (<Route {...rest} render={this.renderRoute} />);
  }
}

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`;

export const AuthRoute = graphql<Props, MeQuery>(meQuery)(C);
