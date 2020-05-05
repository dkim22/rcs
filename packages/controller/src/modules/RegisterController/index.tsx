import * as React from "react";
import { gql } from "@apollo/client";
import { graphql, ChildMutateProps } from "@apollo/react-hoc";
import { RegisterMutation, RegisterMutationVariables } from "../../schemaTypes";

interface Props {
  children: (data: { submit: (values: RegisterMutationVariables) => Promise<null> }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>> {
  submit = async (values: RegisterMutationVariables) => {
    console.log(values);
    const response = await this.props.mutate({
      variables: values
    });
    console.log('response : ', response);
    // TODO: server error 렌더링 구현
    return null;
  };

  render() {
    return (
      this.props.children({ submit: this.submit })
    )
  }
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController = graphql<Props, RegisterMutation, RegisterMutationVariables>(registerMutation)(C as any);
