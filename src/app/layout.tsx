'use client'

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from '@/lib/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}