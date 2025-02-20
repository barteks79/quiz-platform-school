'use server';

import { cookies } from 'next/headers';
import { type Theme } from '@/store/theme-context';

export async function saveThemeCookie(theme: Theme) {
	(await cookies()).set('theme', theme);
}
