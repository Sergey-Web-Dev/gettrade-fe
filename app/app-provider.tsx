'use client'

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import {queryClient} from "@/lib/api/query-client";

export function AppProvider({ children }: { children?: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}