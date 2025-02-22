import NavItem from './nav-item';
import ThemeSwitcher from '../custom/theme-switcher';
import SearchBar from '../custom/search-bar';

export default function Navigation() {
	return (
		<nav className="flex items-center gap-4 h-14 px-6 border-dashed border-b">
			<ul className="flex space-x-4 xl:space-x-6">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/explore">Explore</NavItem>
			</ul>
			<ul className="flex space-x-1 xl:space-x-2 w-full justify-end">
				<SearchBar />
				<ThemeSwitcher />
			</ul>
		</nav>
	);
}
