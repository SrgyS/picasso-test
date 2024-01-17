import { Post } from '../../../../entities/post';
import { baseApi } from '../../../../shared/api/baseApi';

const postsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<Post[], void>({
            query: () => ({
                url: '/posts',
                method: 'GET',
            }),
            providesTags: ['POSTS'],
        }),
    }),
});
export const { useGetPostsQuery } = postsApi;
