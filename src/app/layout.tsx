import ThemeProvider from '@/store/theme-context';
import Navigation from '@/components/navigation/navigation';
import { cookies } from 'next/headers';

import { GeistSans } from 'geist/font/sans';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Platfrorma Quizowa',
	description: 'Lepsze quizy, nawet od Kahoot!',
};

export default async function RootLayout({ children }: PropsWithChildren) {
	const theme = (await cookies()).get('theme') ?? 'dark';

	return (
		<ThemeProvider>
			<html lang="pl" className={`${GeistSans.variable} ${theme}`}>
				<body className={`${GeistSans.className} antialiased`}>
					<div className="block w-3/5 mx-auto h-screen border-x">
						<Navigation />
						{children}
					</div>
				</body>
			</html>
		</ThemeProvider>
	);
}
