import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const myApi = createApi({

    reducerPath : 'myApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://jsonplaceholder.typicode.com/'}),

    endpoints : (builder) =>({
         fetchData : builder.query({
            query :() =>{
              return {
                url : 'albums',
                method: 'GET'
              }
            },
         }),

         fetchDataById : builder.query({
            query :(id) =>{
              return {
                url : `albums/${id}`,
                method: 'GET'
              }
            },
         }),
         deleteDataById : builder.query({
            query :(id) =>{
                return {
                    url : `albums/${id}`,
                    method: 'DELETE'
                }
             
            },
         }),

         createData:builder.mutation({
            query:(body)=>{
                console.log('Create post hai')
                return{
                    url: 'albums',
                    method : 'POST',
                    body,
                    headers : {
                        'Content-Type' : 'application/json; charset-UTF-8'
                    }
                }
            }
         }),
         updateData:builder.mutation({
            query:(updaenewdata)=>{
                console.log('Create post hai')
                const {id, ...data} = updaenewdata
                console.log('Actual update data', data)
                return{
                    url: `albums/${id}`,
                    method : 'PUT',
                    body : data,
                    headers : {
                        'Content-Type' : 'application/json; charset-UTF-8'
                    }
                }
            }
         })
    }),
})

export const {useFetchDataQuery,useFetchDataByIdQuery,useDeleteDataByIdQuery,
    useCreateDataMutation,useUpdateDataMutation}  = myApi