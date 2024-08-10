import styles from "./TreeTable.module.scss";

import { TreeRows } from "../treerows/TreeRows";
import { TreeNode } from "../../ts/TreeNode";
import { CiwCreateData, CiwUpdateData } from "../../ts/ApiData";

type ITreeTable = {
	nodes: TreeNode[];
	onAddChildRow: (id: number) => void;
	onCreateNewRow: (data: CiwCreateData, key: string) => void;
	onUpdateRow: (data: CiwUpdateData, key: string) => void;
	onDeleteRow: (id: number) => void;
};

/**
 * TreeTable component
 */
export default function TreeTable({ nodes, onAddChildRow, onCreateNewRow, onUpdateRow, onDeleteRow }: ITreeTable) {
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
					<TreeRows nodes={nodes} onCreateNewRow={onCreateNewRow} onAddChildRow={onAddChildRow} onUpdateRow={onUpdateRow} onDeleteRow={onDeleteRow} />
				</tbody>
			</table>
		</>
	);
}
