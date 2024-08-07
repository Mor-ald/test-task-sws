import styles from "./NavBar.module.scss";

import { IconsNames } from "../../ts/enums/IconsNames";
import navItems from "../../utils/navItems";
import NavItem from "../navitem/NavItem";
import { useCallback, useState } from "react";

/**
 * Navbar component
 */
export default function Navbar() {
	const [navs, setNavs] = useState(navItems);

	const setActiveNav = useCallback(
		(navName: string) => {
			const newNavs = [...navs.map((nav) => ({ active: false, navIconName: nav.navIconName as IconsNames, navName: nav.navName }))];

			newNavs.find((nav) => nav.navName === navName)!.active = true;
			console.log(newNavs);
			setNavs(newNavs);
		},
		[navs, setNavs],
	);

	return (
		<>
			<div className={styles.navbar}>
				{navs.map((item) => (
					<NavItem
						key={item.navName}
						active={item.active}
						navIconName={item.navIconName as IconsNames}
						navName={item.navName}
						setActiveNav={setActiveNav}
					/>
				))}
			</div>
		</>
	);
}
