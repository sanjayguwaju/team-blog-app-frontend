import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs/getallblog'
        }),
        getBlogPostById: builder.query({
            query: (id) => `blogs/getblogpostbyid/${id}`,
        }),
        addBlogs: builder.mutation({
            query: (payload) => ({
                url: '/blogs/createblog',
                method: 'POST',
                body: payload
            })
        }),
        updateBlogs: builder.mutation({
            query: (payload) => ({
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
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/users/register',
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/users/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/users/logout',
                method: 'POST',
            }),
        }),
        searchBlogPosts: builder.query({
            query: (query) => `blogs/search?query=${query}`,
          }),
        getAllBlogPosts: builder.query({
            query: ({ page, limit }) => `blogs/getallblog?page=${page}&limit=${limit}`,
        }),
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogPostByIdQuery,
    useAddBlogsMutation,
    useUpdateBlogsMutation,
    useDeleteBlogsMutation,
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useSearchBlogPostsQuery,
    useGetAllBlogPostsQuery,
} = apiSlice