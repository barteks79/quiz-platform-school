'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { MenuIcon } from 'lucide-react';

import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerTitle,
} from '@/components/ui/drawer';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleCloseDrawer = () => setIsOpen(false);

	return (
		<Drawer
			open={isOpen}
			onOpenChange={open => setIsOpen(open)}
			onClose={handleCloseDrawer}
		>
			<DrawerTrigger asChild>
				<button className="md:hidden" type="button">
					<MenuIcon size={20} />
				</button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerTitle />
				<div className="flex flex-col gap-3 p-3 text-base">
					<DrawerLink onClick={handleCloseDrawer} href="/">
						Home
					</DrawerLink>
					<DrawerLink onClick={handleCloseDrawer} href="/explore">
						Explore
					</DrawerLink>
				</div>
			</DrawerContent>
		</Drawer>
	);
}

type DrawerLinkProps = {
	onClick: () => void;
	href: string;
	children: React.ReactNode;
};

function DrawerLink({ onClick, href, children }: DrawerLinkProps) {
	const isActive = usePathname() === href;

	return (
		<Link
			onClick={onClick}
			href={href}
			className={cn('transition-colors px-1 py-0.5 text-foreground/80', {
				'hover:text-foreground/80 text-foreground': isActive,
			})}
		>
			{children}
		</Link>
	);
}
