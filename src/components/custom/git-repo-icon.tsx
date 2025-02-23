import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';
import { IoLogoGithub } from 'react-icons/io5';

export default function GitRepoIcon() {
	return (
		<TooltipProvider delayDuration={500}>
			<Tooltip>
				<TooltipTrigger asChild>
					<a
						className="inline-flex h-8 w-8 justify-center items-center hover:bg-accent rounded-md transition-colors"
						href="https://github.com/barteks79/quiz-platform-school"
						target="_blank"
					>
						<IoLogoGithub />
					</a>
				</TooltipTrigger>
				<TooltipContent>
					<p>Check Github Repository</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
