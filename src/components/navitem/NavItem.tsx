import { IconsNames } from "../../ts/enums/IconsNames";
import styles from "./NavItem.module.scss";

type INavItem = {
	navIconName: IconsNames;
	navName: string;
	active: boolean;
	setActiveNav: (navName: string) => void;
};

/**
 * NavItem component
 */
export default function NavItem(props: INavItem) {
	return (
		<>
			<div className={props.active ? styles["nav-item-active"] : styles["nav-item"]} onClick={() => props.setActiveNav(props.navName)}>
				<img src={`/${props.navIconName}.svg`} alt="nav-icon" />
				<span>{props.navName}</span>
			</div>
		</>
	);
}
