'use client';

import { useState } from 'react';

import NavItem from '../navigation/nav-item';
import { MenuIcon } from 'lucide-react';

import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerTitle,
} from '@/components/ui/drawer';

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
				<ul className="flex flex-col gap-3 p-3 text-base">
					<NavItem onClick={handleCloseDrawer} href="/">
						Home
					</NavItem>
					<NavItem onClick={handleCloseDrawer} href="/explore">
						Explore
					</NavItem>
				</ul>
			</DrawerContent>
		</Drawer>
	);
}
