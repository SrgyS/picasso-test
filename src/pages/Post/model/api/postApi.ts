import { Post } from '../../../../entities/post';
import { baseApi } from '../../../../shared/api/baseApi';

const postApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPostById: build.query<Post, string>({
            query: (id) => ({
                url: `/posts/${id}`,
            }),
        }),
    }),
});
export const { useGetPostByIdQuery } = postApi;
