import { baseQuery } from './baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    tagTypes: ['POSTS'],
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
