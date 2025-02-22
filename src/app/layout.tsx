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
					<MainWrapper>
						<Navigation />
						{children}
					</MainWrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}

function MainWrapper({ children }: PropsWithChildren) {
	return (
		<div className="max-w-full md:max-w-[70%] mx-auto h-screen border-dashed md:border-x transition-[max-width] duration-300 ease-in-out">
			{children}
		</div>
	);
}
