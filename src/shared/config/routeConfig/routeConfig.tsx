import { HomePage } from '../../../pages/Home';
import { NotFoundPage } from '../../../pages/NotFound';
import { PostPage } from '../../../pages/Post';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    HOME = 'home',
    POST = 'post',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.POST]: '/post/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.POST]: {
        path: `${RoutePath.post}:id`,
        element: <PostPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
