import { IconsNames } from "../../ts/enums/IconsNames";
import tabItems from "../../utils/tabItems";
import { Button, TabMenu } from "../components";
import styles from "./TopBar.module.scss";

/**
 * TopBar component
 */
export default function TopBar() {
	return (
		<>
			<div className={styles.topbar}>
				<div className={styles.buttons}>
					<Button iconName={IconsNames.Bar} />
					<Button iconName={IconsNames.ShareArrow} />
				</div>
				<div className={styles.tabs}>
					<TabMenu tabs={tabItems} />
				</div>
			</div>
		</>
	);
}
