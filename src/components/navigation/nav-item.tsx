'use client';

import { usePathname } from 'next/navigation';
import { type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavItemProps = {
	href: string;
	className?: string;
	onClick?: () => void;
} & PropsWithChildren;

export default function NavItem({
	href,
	children,
	className,
	onClick,
}: NavItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<li>
			<Link
				href={href}
				onClick={onClick}
				className={cn(
					'transition-colors px-1 py-0.5 text-foreground/80',
					className,
					{
						'hover:text-foreground/80 text-foreground': isActive,
					}
				)}
			>
				{children}
			</Link>
		</li>
	);
}
