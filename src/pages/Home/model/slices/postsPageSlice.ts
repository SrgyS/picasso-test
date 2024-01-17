import { PostsPageShema } from '../types/postsPageShema';
import { createSlice } from '@reduxjs/toolkit/react';

const initialState: PostsPageShema = {
    posts: [],
};

export const postsPageSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { actions: postsPageActions } = postsPageSlice;
export const { reducer: postsPageReducer } = postsPageSlice;
