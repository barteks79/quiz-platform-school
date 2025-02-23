'use client';

import { useRouter } from 'next/navigation';
import { DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { type Dispatch, SetStateAction } from 'react';

import {
	CommandDialog,
	CommandInput,
	CommandList,
	CommandGroup,
	CommandItem,
	CommandEmpty,
	CommandSeparator,
} from '@/components/ui/command';

type CommandBoxProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CommandBox({
	isOpen,
	setIsOpen,
}: CommandBoxProps) {
	const router = useRouter();

	function handleSelectCommandItem(href: string) {
		router.push(href);
		setIsOpen(false);
	}

	return (
		<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>

				<CommandGroup heading="Navigation">
					<CommandItem onSelect={() => handleSelectCommandItem('/')}>
						Home
					</CommandItem>
					<CommandItem
						onSelect={() => handleSelectCommandItem('/explore')}
					>
						Explore
					</CommandItem>
				</CommandGroup>

				<CommandSeparator className="mb-2" />

				<CommandGroup heading="Settings">
					<CommandItem
						onSelect={() => handleSelectCommandItem('/sign-in')}
					>
						Login
					</CommandItem>
					<CommandItem
						onSelect={() => handleSelectCommandItem('/sign-up')}
					>
						Sign Up
					</CommandItem>
				</CommandGroup>
			</CommandList>

			<DialogTitle />
			<DialogDescription />
		</CommandDialog>
	);
}
