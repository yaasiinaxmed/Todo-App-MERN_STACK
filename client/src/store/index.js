import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todoSlice } from './api/TodoSlice'

export const store = configureStore({
    reducer: {
        [todoSlice.reducerPath]: todoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(todoSlice.middleware),
})

setupListeners(store.dispatch)