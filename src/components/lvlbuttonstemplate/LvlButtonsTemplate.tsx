import styles from "./LvlButtonsTemplate.module.scss";

import { IconsNames } from "../../ts/enums/IconsNames";
import { Button } from "../components";
import { ILvlButtonsTemplate } from "./LvlButtonsTemplate.types";

/**
 * Template buttons for lvl col
 */
export default function LvlButtonsTemplate({
	idRow,
	nestingLvl,
	editMode,
	menuButtonVisible,
	onShowButtonMenu,
	onHideButtonMenu,
	onAddChildRow,
	onDeleteRow,
}: ILvlButtonsTemplate) {
	const onAddRow = () => {
		if (!editMode) onAddChildRow(idRow);
	};

	return (
		<>
			<div className={styles["buttons-container"]} onMouseLeave={onHideButtonMenu} style={{ marginLeft: `${nestingLvl * 22}px` }}>
				<div className={styles["button-doc"]} onMouseEnter={() => !editMode && onShowButtonMenu()}>
					<Button iconName={IconsNames.Document} onClick={onAddRow} />
				</div>
				{menuButtonVisible && (
					<div className={styles["button-trash"]}>
						<Button iconName={IconsNames.Trash} onClick={() => onDeleteRow(idRow)} />
					</div>
				)}
				{menuButtonVisible && <div className={styles["buttons-container-bg"]}></div>}
			</div>
		</>
	);
}
