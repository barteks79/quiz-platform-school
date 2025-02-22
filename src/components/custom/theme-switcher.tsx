'use client';

import { useTheme, type Theme } from '@/store/theme-context';
import { SunIcon, MoonIcon } from 'lucide-react/icons';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const changedTheme: Theme = theme === 'dark' ? 'light' : 'dark';

	return (
		<button
			onClick={() => setTheme(changedTheme)}
			className="text-foreground hover:bg-accent p-2 rounded-md transition-colors"
		>
			{theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
		</button>
	);
}
