import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: process.env.SERVER_URL}),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: ()=> '/blogs/getallblog'
        }),
        addBlogs: builder.mutation({
            query: (payload) => ({
                url: '/blogs/createblog',
                method: 'POST',
                body: payload
            })
        }),
        updateBlogs: builder.query({
            query: (payload)=> ({
                url: `/update/${payload.id}`,
                method: 'PUT',
                body: payload
            })
        }),
        deleteBlogs: builder.mutation({
            query: ({ id }) => ({
                url: `/blogs/deleteblog/${id}`,
                method: 'DELETE',
                body: id
            })
        })
    })
})

export const {
    useGetBlogsQuery,
    useAddBlogsMutation,
    useUpdateBlogsMutation,
    useDeleteBlogsMutation,
} = apiSlice