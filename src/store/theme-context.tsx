'use client';

import {
	useState,
	useEffect,
	useContext,
	createContext,
	type PropsWithChildren,
	type Dispatch,
	type SetStateAction,
} from 'react';

export type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
	theme: Theme;
	setTheme: Dispatch<SetStateAction<Theme>>;
}>({
	theme: 'dark',
	setTheme: () => {},
});

export default function ThemeProvider({ children }: PropsWithChildren) {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme === 'light' || storedTheme === 'dark')
			setTheme(storedTheme);
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);
	}, [theme]);

	const contextValue = { theme, setTheme };
	return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}

export function useTheme() {
	const theme = useContext(ThemeContext);
	if (!theme)
		throw new Error('useTheme must be used within a ThemeProvider');
	return theme;
}
