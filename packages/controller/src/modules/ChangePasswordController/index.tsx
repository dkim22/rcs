import * as React from "react";
import { gql } from "@apollo/client";
import { graphql, ChildMutateProps } from "@apollo/react-hoc";
import { forgotPasswordChangeMutationVariables, forgotPasswordChangeMutation } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (data: { submit: (values: forgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null> }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, forgotPasswordChangeMutation, forgotPasswordChangeMutationVariables>> {
  submit = async (values: forgotPasswordChangeMutationVariables) => {
    console.log(values);
    const { data } = await this.props.mutate({
      variables: values
    });
    console.log('response : ', data?.forgotPasswordChange);
    if (data?.forgotPasswordChange) {
      return normalizeErrors(data.forgotPasswordChange);
    }
    return null;
  };

  render() {
    return (
      this.props.children({ submit: this.submit })
    )
  }
}

const forgotPasswordChangeMutation = gql`
  mutation forgotPasswordChangeMutation($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

export const ChangePasswordController = graphql<Props, forgotPasswordChangeMutation, forgotPasswordChangeMutationVariables>(forgotPasswordChangeMutation)(C as any);
