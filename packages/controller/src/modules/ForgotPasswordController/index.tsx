import * as React from 'react';
import { gql } from '@apollo/client';
import { graphql, ChildMutateProps } from '@apollo/react-hoc';
import {
  sendForgotPasswordEmailMutation,
  sendForgotPasswordEmailMutationVariables,
} from '../../schemaTypes';

interface Props {
  children: (data: {
    submit: (values: sendForgotPasswordEmailMutationVariables) => Promise<null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, sendForgotPasswordEmailMutation, sendForgotPasswordEmailMutationVariables>
> {
  submit = async (values: sendForgotPasswordEmailMutationVariables) => {
    console.log(values);
    const response = await this.props.mutate({
      variables: values,
    });
    console.log('response : ', response);

    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const forgotPasswordMutation = gql`
  mutation sendForgotPasswordEmailMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`;

export const ForgotPasswordController = graphql<
  Props,
  sendForgotPasswordEmailMutation,
  sendForgotPasswordEmailMutationVariables
>(forgotPasswordMutation)(C as any);
