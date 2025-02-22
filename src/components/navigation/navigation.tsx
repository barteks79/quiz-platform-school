import NavItem from './nav-item';
import ThemeSwitcher from '../custom/theme-switcher';
import SearchBar from '../custom/search-bar';
import HamburgerMenu from '../custom/hamburger-menu';

export default function Navigation() {
	return (
		<nav className="flex items-center gap-4 h-14 px-3 md:px-6 border-dashed border-b">
			<HamburgerMenu />
			<ul className="hidden md:flex space-x-4 xl:space-x-6 text-sm">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/explore">Explore</NavItem>
			</ul>
			<ul className="flex flex-1 justify-between gap-2 w-full md:justify-end">
				<SearchBar />
				<ThemeSwitcher />
			</ul>
		</nav>
	);
}
