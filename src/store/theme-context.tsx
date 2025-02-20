'use client';

import { useContext, createContext, type PropsWithChildren } from 'react';
import { saveThemeCookie } from '@/server/actions';

export type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
	handleThemeChange: (theme: Theme) => void;
}>({
	handleThemeChange: async () => {},
});

export default function ThemeProvider({ children }: PropsWithChildren) {
	const contextValue = { handleThemeChange: saveThemeCookie };
	return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}

export function useTheme() {
	const theme = useContext(ThemeContext);
	if (!theme)
		throw new Error('useTheme must be used within a ThemeProvider');
	return theme;
}
