import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BACK_URL } from '../constants/constant'
import { AzureAuth, ResponseAuth } from '../models/AzureAuth'
import { getUserNameFromWindowsLogin, getIdFromMail, getRolesFromWindowsLogin} from '../utilities/utils'
// Define a service using a base URL and expected endpoints
export const basicApi = createApi({
  reducerPath: 'basicApi',
  baseQuery: fetchBaseQuery({ baseUrl: BACK_URL}),
  endpoints: (builder) => ({
    getUser: builder.query<ResponseAuth, void>({
      query: () => {
        return {
            url : `/.auth/me`,
            credentials: "include",
            headers:{"Cache-Control" : "no-cache","Pragma" : "no-cache",'X-Custom-Header': 'foobar'}   
        }
      },
      transformResponse(baseQueryReturnValue : AzureAuth[]) {
          console.log(baseQueryReturnValue);
          const userName = getUserNameFromWindowsLogin(baseQueryReturnValue[0])
          const userId = getIdFromMail(baseQueryReturnValue[0])
          //const roles = getRolesFromWindowsLogin(baseQueryReturnValue[0])
          const response : ResponseAuth = {userName , userId} 
          return response
      },
    }),
  }),
})

export const useGetUser  = basicApi.endpoints.getUser.useQuery