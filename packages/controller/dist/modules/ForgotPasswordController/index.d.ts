import * as React from "react";
import { sendForgotPasswordEmailMutationVariables } from "../../schemaTypes";
interface Props {
    children: (data: {
        submit: (values: sendForgotPasswordEmailMutationVariables) => Promise<null>;
    }) => JSX.Element | null;
}
export declare const ForgotPasswordController: React.ComponentClass<Props, any>;
export {};
