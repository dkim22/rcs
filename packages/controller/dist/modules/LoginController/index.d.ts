import * as React from "react";
import { LoginMutationVariables } from "../../schemaTypes";
interface Props {
    children: (data: {
        submit: (values: LoginMutationVariables) => Promise<null>;
    }) => JSX.Element | null;
}
export declare const LoginController: React.ComponentClass<Props, any>;
export {};
