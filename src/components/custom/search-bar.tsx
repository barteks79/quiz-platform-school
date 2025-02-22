import { Button } from '../ui/button';

export default function SearchBar() {
	return (
		<div className="flex-1 w-full md:flex-none md:w-auto">
			<Button className="justify-start bg-muted/50 text-muted-foreground hover:bg-accent hover:text-foreground border border-input w-full h-8 relative md:w-40 lg:w-56 xl:w-64 font-normal">
				<span className="inline-flex xl:hidden">Search...</span>
				<span className="hidden xl:inline-flex">Search quizzes...</span>
				<kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>
		</div>
	);
}
