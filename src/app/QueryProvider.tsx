'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { store } from '../store/store';


const queryClient = new QueryClient()
export default function QueryProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
            </Provider>
        </QueryClientProvider>
    )
}
