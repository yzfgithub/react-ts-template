import React from 'react';
import store from './root.store';

export const StoreContext = React.createContext(store);

export const useStore = () => React.useContext(StoreContext);

export default store;