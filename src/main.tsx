import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from './app/providers/StoreProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>
);
