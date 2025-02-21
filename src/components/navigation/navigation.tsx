import NavItem from './nav-item';

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center h-14 px-6 border-b">
			<ul className="flex space-x-4 xl:space-x-6">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/explore">Explore</NavItem>
			</ul>
		</nav>
	);
}
