export interface sendForgotPasswordEmailMutation {
    sendForgotPasswordEmail: boolean | null;
}
export interface sendForgotPasswordEmailMutationVariables {
    email: string;
}
export interface LoginMutation_login_errors {
    __typename: "Error";
    path: string;
    message: string;
}
export interface LoginMutation_login {
    __typename: "LoginResponse";
    errors: LoginMutation_login_errors[] | null;
    sessionId: string | null;
}
export interface LoginMutation {
    login: LoginMutation_login | null;
}
export interface LoginMutationVariables {
    email: string;
    password: string;
}
export interface RegisterMutation_register {
    __typename: "Error";
    path: string;
    message: string;
}
export interface RegisterMutation {
    register: RegisterMutation_register[] | null;
}
export interface RegisterMutationVariables {
    email: string;
    password: string;
}
