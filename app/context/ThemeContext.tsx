'use client';
import React, { createContext, useState, ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<{ switchDark: () => void; switchLight: () => void; theme: string } | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const switchDark = () => {
        setTheme('dark');
    };

    const switchLight = () => {
        setTheme('light');
    };

    return (
        <ThemeContext.Provider value={{ switchDark, switchLight, theme }}>
            <div className={`${theme} anim`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
