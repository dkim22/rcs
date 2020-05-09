import * as React from "react";
import { forgotPasswordChangeMutationVariables } from "../../schemaTypes";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";
interface Props {
    children: (data: {
        submit: (values: forgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const ChangePasswordController: React.ComponentClass<Props, any>;
export {};
