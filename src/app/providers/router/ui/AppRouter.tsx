import { Route, Routes } from 'react-router-dom';

import { Loader } from '../../../../shared/ui/loader/Loader';
import { Suspense } from 'react';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
}
