'use client';

import { Button } from '@/components/ui/button';
import { useTheme, type Theme } from '@/store/theme-context';
import { SunIcon, MoonIcon } from 'lucide-react/icons';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const changedTheme: Theme = theme === 'dark' ? 'light' : 'dark';

	const handleSwitchTheme = () => setTheme(changedTheme);

	return (
		<Button size="icon" variant="ghost" onClick={handleSwitchTheme}>
			{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
}
