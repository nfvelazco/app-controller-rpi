import { ResponseAuth } from "./AzureAuth";

// export interface GetUser {
//     status: string;
//     endpointName: string;
//     requestId: string;
//     startedTimeStamp: number;
//     //data: ResponseAuth;
//     fulfilledTimeStamp: number;
// }

// export interface Queries {
//     "getUser(undefined)": GetUser;
// }
// export interface EntidadesApi {
//     queries: Queries;
// }

export interface TestSlice {
    number: number;
}
export interface ReduxState {
    // entidadesApi: EntidadesApi;
    testSlice: TestSlice
}

