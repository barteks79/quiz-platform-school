'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CommandBox from './command-box';

export default function SearchBar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsOpen(open => !open);
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div className="flex-1 w-full md:flex-none md:w-auto">
			<Button
				onClick={() => setIsOpen(true)}
				className="justify-start bg-muted/50 text-muted-foreground hover:bg-accent hover:text-foreground border border-input w-full h-8 relative md:w-56 lg:w-64 font-normal"
			>
				<span className="inline-flex">Search...</span>
				<kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>

			<CommandBox isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
}
