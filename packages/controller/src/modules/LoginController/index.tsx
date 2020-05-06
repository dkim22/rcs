import * as React from "react";
import { gql } from "@apollo/client";
import { graphql, ChildMutateProps } from "@apollo/react-hoc";
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface Props {
  onSessionId?: (sessionId: string) => void;
  children: (data: { submit: (values: LoginMutationVariables) => Promise<{ [key: string]: string } | null> }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, LoginMutation, LoginMutationVariables>> {
  submit = async (values: LoginMutationVariables) => {
    console.log(values);
    const { data } = await this.props.mutate({
      variables: values
    });
    console.log('response : ', data);

    if (data?.login?.errors) {
      // show server errors
      // [{ path: "email", message: "invalid ..." }]
      // { email: "invalid ..."}

      return normalizeErrors(data.login.errors);
    }

    // 앱에는 쿠키가 없으니 세션 아이디를 저장하기 위하여
    if (this.props.onSessionId && data?.login?.sessionId) {
      this.props.onSessionId(data.login.sessionId);
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
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController = graphql<Props, LoginMutation, LoginMutationVariables>(loginMutation)(C as any);
