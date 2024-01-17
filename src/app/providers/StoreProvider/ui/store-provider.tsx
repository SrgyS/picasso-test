import { Provider } from 'react-redux';
import { StateShema } from '../config/StateShema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: StateShema;
}
export function StoreProvider(props: StoreProviderProps) {
    const { children } = props;

    const store = createReduxStore();

    return <Provider store={store}>{children}</Provider>;
}
