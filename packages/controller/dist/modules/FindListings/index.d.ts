/// <reference types="react" />
import { FindListingsQuery_findListings } from "../../schemaTypes";
export interface WithFindListings {
    listings: FindListingsQuery_findListings[];
    loading: boolean | undefined;
}
export declare const withFindListings: (WrappedComponent: import("react").ComponentType<any>) => import("react").ComponentClass<any, any>;
