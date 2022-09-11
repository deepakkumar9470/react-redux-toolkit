import {configureStore} from '@reduxjs/toolkit'
import {myApi} from './apiFetch'


export const store = configureStore({
    reducer : {
        [myApi.reducerPath] : myApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
})


