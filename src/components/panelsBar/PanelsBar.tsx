import Panel from "../panel/Panel";
import styles from "./PanelsBar.module.scss";

/**
 * PanelsBar component
 */
export default function PanelsBar() {
	return (
		<>
			<div className={styles["panels-bar"]}>
				<Panel header="Строительно-монтажные работы" />
			</div>
		</>
	);
}
