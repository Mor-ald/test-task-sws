import styles from "./ProjectMenu.module.scss";

import { IconsNames } from "../../ts/enums/IconsNames";
import { Button } from "../components";

/**
 * ProjectMenu component
 */
export default function ProjectMenu() {
	return (
		<>
			<div className={styles["project-menu"]}>
				<div className={styles["project-name"]}>
					<span>Название проекта</span>
					<span>Аббревиатура</span>
				</div>
				<Button iconName={IconsNames.ArrowDown} />
			</div>
		</>
	);
}
