'use client';

import { useState } from 'react';

import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerTitle,
} from '@/components/ui/drawer';
import NavItem from '@/components/navigation/nav-item';
import { MenuIcon } from 'lucide-react';

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
			<DrawerContent aria-describedby="drawer-navigation">
				<DrawerTitle className="mt-2 mb-1 mx-4">Quiz</DrawerTitle>
				<ul className="flex flex-col gap-3 p-3 text-base">
					<NavItem onClick={handleCloseDrawer} href="/">
						Home
					</NavItem>

					<NavItem onClick={handleCloseDrawer} href="/explore">
						Explore
					</NavItem>
				</ul>

				<DrawerTitle className="mt-2 mb-1 mx-4">Profile</DrawerTitle>
				<ul className="flex flex-col gap-3 p-3 text-base">
					<NavItem onClick={handleCloseDrawer} href="/sign-in">
						Login
					</NavItem>

					<NavItem onClick={handleCloseDrawer} href="/sign-up">
						Sign Up
					</NavItem>
				</ul>
			</DrawerContent>
		</Drawer>
	);
}
