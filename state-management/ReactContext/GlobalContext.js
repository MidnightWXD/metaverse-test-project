'use client';
import { createContext, ReactNode, useContext } from 'react';
import { useGlobal } from '@/hook/global'; 

const GlobalContext = createContext({
    productNav: false,
    setProductNav: () => {}
});

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
    let value = useGlobal();
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}