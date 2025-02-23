import NavItem from './nav-item';
import ThemeSwitcher from '../custom/theme-switcher';
import SearchBar from '../custom/search-bar';
import HamburgerMenu from '../custom/hamburger-menu';
import GitRepoIcon from '@/components/custom/git-repo-icon';

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center gap-4 h-14 px-3 md:px-6 border-dashed border-b">
			<HamburgerMenu />

			<ul className="hidden md:flex space-x-4 xl:space-x-6 text-sm">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/explore">Explore</NavItem>
				<NavItem href="/sign-in">Login</NavItem>
				<NavItem href="/sign-up">Sign Up</NavItem>
			</ul>

			<ul className="flex flex-1 items-center justify-between gap-1 w-full md:justify-end">
				<SearchBar />
				<GitRepoIcon />
				<ThemeSwitcher />
			</ul>
		</nav>
	);
}
