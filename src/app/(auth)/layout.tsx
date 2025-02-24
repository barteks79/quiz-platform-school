import { type PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
	return (
		<main className="absolute top-1/2 left-1/2 w-full max-w-sm">
			{children}
		</main>
	);
}
