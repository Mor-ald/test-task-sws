import styles from "./DefaultRow.module.scss";

import { IDefaultRow } from "./DefaultRow.types";

/**
 * Default row of tree table
 */
export default function DefaultRow({
	linesClassName,
	nestingLvl,
	rowName,
	salary,
	equipmentCosts,
	overheads,
	estimatedProfit,
	children,
	onDoubleRowClick,
}: IDefaultRow) {
	return (
		<>
			<tr className={styles["row"]} onDoubleClick={onDoubleRowClick}>
				<td className={styles["lvl-col"]} style={{ minWidth: `${55 + 22 * nestingLvl}px` }}>
					<div className={styles[linesClassName]} style={{ marginLeft: `${nestingLvl * 22}px` }}></div>
					{children}
				</td>
				<td>{rowName}</td>
				<td>{salary}</td>
				<td>{equipmentCosts}</td>
				<td>{overheads}</td>
				<td>{estimatedProfit}</td>
			</tr>
		</>
	);
}
