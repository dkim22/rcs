import * as React from "react";
import { gql } from "@apollo/client";
import { graphql, ChildMutateProps } from "@apollo/react-hoc";
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface Props {
  children: (data: { submit: (values: LoginMutationVariables) => Promise<{ [key: string]: string } | null> }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, LoginMutation, LoginMutationVariables>> {
  submit = async (values: LoginMutationVariables) => {
    console.log(values);
    const { data } = await this.props.mutate({
      variables: values
    });
    console.log('response : ', data);

    if (data?.login) {
      // show server errors
      // [{ path: "email", message: "invalid ..." }]
      // { email: "invalid ..."}

      return normalizeErrors(data.login);
    }
    return null;
  };

  render() {
    return (
      this.props.children({ submit: this.submit })
    )
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const LoginController = graphql<Props, LoginMutation, LoginMutationVariables>(loginMutation)(C as any);
