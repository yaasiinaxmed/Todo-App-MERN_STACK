import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BASE_URL'

export const todoSlice = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ["todoApi"],

    endpoints: (builder) => ({
        
        getTodo: builder.query({
            query: () => {
                return {
                    url: 'todos',
                    method: "GET"
                }
            },
            providesTags: ["todoApi"]
        }),

        createTodo: builder.mutation({
            query: (newTodo) => ({
                url: "todos/create", 
                method: "POST",
                body: newTodo
            }),
            invalidatesTags: ["todoApi"]
        }),

        updateTodo: builder.mutation({
            query: ({id, todo}) => ({
                url: `todos/update/${id}`,
                method: "PUT",
                body: todo
            }),
            invalidatesTags: ["todoApi"]
        }),

        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["todoApi"]
        })
    }),
});

export const { useGetTodoQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoSlice

export default todoSlice.reducer