import ThemeProvider from '@/store/theme-context';
import Navigation from '@/components/navigation/navigation';

import { GeistSans } from 'geist/font/sans';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Platfrorma Quizowa',
	description: 'Lepsze quizy, nawet od Kahoot!',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="pl" className={`${GeistSans.variable} dark`}>
			<body className={`${GeistSans.className} antialiased`}>
				<ThemeProvider>
					<div className="max-w-[1278px] mx-auto h-screen border-dashed xl:border-x">
						<Navigation />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
