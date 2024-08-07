import { PanelsBar, ProjectMenu } from "../components";
import styles from "./MiddleBar.module.scss";

/**
 * MiddleBar component
 */
export default function MiddleBar() {
	return (
		<>
			<div className={styles["middle-bar"]}>
				<ProjectMenu />
				<PanelsBar />
			</div>
		</>
	);
}
