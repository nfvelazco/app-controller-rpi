// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { selectFull } from '../redux/slices/rpiSilice/rpiSilice'
// import { BACK_URL } from '../constants/constant'
// import { AzureAuth, ResponseAuth } from '../models/AzureAuth'
// import { getUserNameFromWindowsLogin, getIdFromMail, getRolesFromWindowsLogin} from '../utilities/utils'
// // Define a service using a base URL and expected endpoints
// export const rpiApi = createApi({
//   reducerPath: 'rpi',
//   baseQuery: fetchBaseQuery({ baseUrl: selectFull }),
//   endpoints: (builder) => ({
//     getFases: builder.query<ResponseAuth, void>({
//       query: () => {
//         return {
//             url : `/.auth/me`,
//             credentials: "include",
//             headers:{"Cache-Control" : "no-cache","Pragma" : "no-cache",'X-Custom-Header': 'foobar'}   
//         }
//       },
//       transformResponse(baseQueryReturnValue : AzureAuth[]) {
//           console.log(baseQueryReturnValue);
//           const userName = getUserNameFromWindowsLogin(baseQueryReturnValue[0])
//           const userId = getIdFromMail(baseQueryReturnValue[0])
//           //const roles = getRolesFromWindowsLogin(baseQueryReturnValue[0])
//           const response : ResponseAuth = {userName , userId} 
//           return response
//       },
//     }),
//   }),
// })

// export const useGetUser  = rpiApi.endpoints.getUser.useQuery