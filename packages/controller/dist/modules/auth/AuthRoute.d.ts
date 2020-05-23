import * as React from "react";
import { RouteProps, RouteComponentProps } from "react-router";
import { ChildProps } from "@apollo/react-hoc";
import { MeQuery } from "../../schemaTypes";
declare type Props = RouteProps;
export declare class C extends React.PureComponent<ChildProps<Props, MeQuery>> {
    renderRoute: (routeProps: RouteComponentProps<{}, import("react-router").StaticContext, import("history").History.PoorMansUnknown>) => JSX.Element | null;
    render(): JSX.Element;
}
export declare const AuthRoute: React.ComponentClass<RouteProps, any>;
export {};
