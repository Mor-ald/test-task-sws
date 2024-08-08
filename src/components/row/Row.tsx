import styles from "./Row.module.scss";

import { IconsNames } from "../../ts/enums/IconsNames";
import { TreeNode } from "../../ts/TreeNode";
import { Button } from "../components";
import { useCallback, useState } from "react";

type IRow = {
	node: TreeNode;
};

export function Row({ node }: IRow) {
	const [visible, setVisible] = useState(false);
	const menuButtonVisible = visible && !node.editMode;
	const nestingLvl = node.key.split("-").length - 1;
	const linesClassName = nestingLvl === 0 ? "" : node.key.at(-1) === "0" ? "lines" : "lines-long";

	const onShowButtonMenu = useCallback(() => {
		if (!menuButtonVisible) setVisible(true);
	}, []);

	const onHideButtonMenu = useCallback(() => {
		setVisible(false);
	}, []);

	const ButtonsTemplate = () => (
		<>
			<div className={styles["buttons-container"]} onMouseLeave={onHideButtonMenu} style={{ marginLeft: `${nestingLvl * 22}px` }}>
				<div className={styles["button-doc"]} onMouseEnter={onShowButtonMenu}>
					<Button iconName={IconsNames.Document} />
				</div>
				{menuButtonVisible && (
					<div className={styles["button-trash"]}>
						<Button iconName={IconsNames.Trash} />
					</div>
				)}
				{menuButtonVisible && <div className={styles["buttons-container-bg"]}></div>}
			</div>
		</>
	);

	return (
		<tr className={styles["row"]}>
			<td className={styles["lvl-col"]} style={{ minWidth: `${55 + 22 * nestingLvl}px` }}>
				<div className={styles[linesClassName]} style={{ marginLeft: `${nestingLvl * 22}px` }}></div>
				<ButtonsTemplate />
			</td>
			<td>{node.data.rowName}</td>
			<td>{node.data.salary}</td>
			<td>{node.data.equipmentCosts}</td>
			<td>{node.data.overheads}</td>
			<td>{node.data.estimatedProfit}</td>
		</tr>
	);
}
