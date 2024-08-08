import { TreeTable } from "../../components/components";
import styles from "./Ciw.module.scss";

/**
 * Page of construction and installation works
 */
export default function Ciw() {
	return (
		<>
			<div className={styles.ciw}>
				<TreeTable />
			</div>
		</>
	);
}
