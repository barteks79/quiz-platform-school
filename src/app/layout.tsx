import ThemeProvider from '@/store/theme-context';
import { cookies } from 'next/headers';

import { GeistSans } from 'geist/font/sans';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Platfrorma Quizowa',
	description: 'Lepsze quizy, nawet od Kahoot!',
};

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	const theme = (await cookies()).get('theme') ?? 'dark';

	return (
		<ThemeProvider>
			<html lang="pl" className={`${GeistSans.variable} ${theme}`}>
				<body className={`${GeistSans.className} antialiased`}>
					{children}
				</body>
			</html>
		</ThemeProvider>
	);
}
