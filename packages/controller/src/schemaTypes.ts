/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  email: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: forgotPasswordChangeMutation
// ====================================================

export interface forgotPasswordChangeMutation_forgotPasswordChange {
  __typename: "Error";
  path: string;
  message: string;
}

export interface forgotPasswordChangeMutation {
  forgotPasswordChange: forgotPasswordChangeMutation_forgotPasswordChange[] | null;
}

export interface forgotPasswordChangeMutationVariables {
  newPassword: string;
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateListingMutation
// ====================================================

export interface CreateListingMutation {
  createListing: boolean;
}

export interface CreateListingMutationVariables {
  picture?: any | null;
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindListingsQuery
// ====================================================

export interface FindListingsQuery_findListings_owner {
  __typename: "User";
  id: string;
  email: string;
}

export interface FindListingsQuery_findListings {
  __typename: "Listing";
  id: string;
  name: string;
  pictureUrl: string;
  owner: FindListingsQuery_findListings_owner;
}

export interface FindListingsQuery {
  findListings: FindListingsQuery_findListings[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendForgotPasswordEmailMutation
// ====================================================

export interface sendForgotPasswordEmailMutation {
  sendForgotPasswordEmail: boolean | null;
}

export interface sendForgotPasswordEmailMutationVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewListingQuery
// ====================================================

export interface ViewListingQuery_viewListing_owner {
  __typename: "User";
  id: string;
  email: string;
}

export interface ViewListingQuery_viewListing {
  __typename: "Listing";
  id: string;
  name: string;
  category: string;
  pictureUrl: string;
  owner: ViewListingQuery_viewListing_owner;
}

export interface ViewListingQuery {
  viewListing: ViewListingQuery_viewListing | null;
}

export interface ViewListingQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
