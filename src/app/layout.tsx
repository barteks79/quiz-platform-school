import { GeistSans } from 'geist/font/sans';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Platfrorma Quizowa',
	description: 'Lepsze quizy, nawet od Kahoot!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pl" className={`${GeistSans.variable} dark`}>
			<body className={`${GeistSans.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
