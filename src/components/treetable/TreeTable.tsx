import { useState } from "react";

import styles from "./TreeTable.module.scss";

import { TreeRows } from "../treerows/TreeRows";

/**
 * TreeTable component
 */
export default function TreeTable() {
	const [nodes, setNodes] = useState([]);

	return (
		<>
			<table className={styles["tree-table"]}>
				<thead>
					<tr>
						<th className={styles["lvl-col"]}>Уровень</th>
						<th className={styles["work-col"]}>Наименование работ</th>
						<th className={styles["salary-col"]}>Основная з/п</th>
						<th className={styles["equipment-col"]}>Оборудование</th>
						<th className={styles["expenses-col"]}>Накладные расходы</th>
						<th className={styles["profit-col"]}>Сметная прибыль</th>
					</tr>
				</thead>
				<tbody>
					<TreeRows nodes={nodes} />
				</tbody>
			</table>
		</>
	);
}
