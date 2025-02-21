'use client';

import { useTheme, type Theme } from '@/store/theme-context';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const changedTheme: Theme = theme === 'dark' ? 'light' : 'dark';

	return (
		<button onClick={() => setTheme(changedTheme)}>
			{theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
		</button>
	);
}
