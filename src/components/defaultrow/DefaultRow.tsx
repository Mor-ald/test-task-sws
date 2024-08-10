import convertToStringNumberWithSpaces from "../../lib/convertToStringNumberWithSpaces";
import styles from "./DefaultRow.module.scss";

import { IDefaultRow } from "./DefaultRow.types";

/**
 * Default row of tree table
 */
export default function DefaultRow({
	qRowsWithLessNesting,
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
			{qRowsWithLessNesting > 0 && (
				<div className={styles["vertical-add-line-container"]}>
					<div
						className={styles["vertical-add-line"]}
						style={{
							marginLeft: `${nestingLvl * 22}px`,
							left: `${3}px`,
							top: `${-45 - 60 * qRowsWithLessNesting}px`,
							height: `${65 * qRowsWithLessNesting}px`,
						}}
					></div>
				</div>
			)}
			<tr className={styles["row"]} onDoubleClick={onDoubleRowClick}>
				<td className={styles["lvl-col"]} style={{ minWidth: `${55 + 22 * nestingLvl}px` }}>
					<div className={styles[linesClassName]} style={{ marginLeft: `${nestingLvl * 22}px` }}></div>
					{children}
				</td>
				<td>{rowName}</td>
				<td>{convertToStringNumberWithSpaces(`${salary}`)}</td>
				<td>{convertToStringNumberWithSpaces(`${equipmentCosts}`)}</td>
				<td>{convertToStringNumberWithSpaces(`${overheads}`)}</td>
				<td>{convertToStringNumberWithSpaces(`${estimatedProfit}`)}</td>
			</tr>
		</>
	);
}
