import { StateShema } from './StateShema';
import { baseApi } from '../../../../shared/api/baseApi';
import { configureStore } from '@reduxjs/toolkit';
// ...

export function createReduxStore(initialState?: StateShema) {
    const store = configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
        },
        preloadedState: initialState,

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    });
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
