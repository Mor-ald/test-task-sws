import { useCallback, useState } from "react";
import { CiwCreateData, CiwUpdateData } from "../../ts/ApiData";
import DefaultRow from "../defaultrow/DefaultRow";
import EditableRow from "../editablerow/EditableRow";
import LvlButtonsTemplate from "../lvlbuttonstemplate/LvlButtonsTemplate";
import { IRow } from "./Row.types";

/**
 * Row component
 */
export function Row({ node, onCreateNewRow, onAddChildRow, onUpdateRow, onDeleteRow }: IRow) {
	const [visible, setVisible] = useState(false);
	const [editMode, setEditMode] = useState(node.editMode);

	const menuButtonVisible = visible && !node.editMode;
	const nestingLvl = node.key.split("-").length - 1;
	const linesClassName = nestingLvl === 0 ? "" : node.key.at(-1) === "0" ? "lines" : "lines-long";

	const convertToNumber = useCallback((string: string) => {
		return Number(string.split(" ").join("").split(",").join("."));
	}, []);

	const onSendCreatedRow = useCallback(
		(formData: { rowName: string; salary: string; equipmentCosts: string; overheads: string; estimatedProfit: string }) => {
			const data: CiwCreateData = {
				equipmentCosts: formData.equipmentCosts ? convertToNumber(formData.equipmentCosts) : 0,
				estimatedProfit: formData.estimatedProfit ? convertToNumber(formData.estimatedProfit) : 0,
				machineOperatorSalary: 0,
				mainCosts: 0,
				materials: 0,
				mimExploitation: 0,
				overheads: formData.overheads ? convertToNumber(formData.overheads) : 0,
				parentId: node.parentId,
				rowName: formData.rowName,
				salary: formData.salary ? convertToNumber(formData.salary) : 0,
				supportCosts: 0,
			};

			onCreateNewRow(data);
		},
		[onCreateNewRow, convertToNumber],
	);

	const onSendEditedRow = useCallback(
		(formData: { rowName: string; salary: string; equipmentCosts: string; overheads: string; estimatedProfit: string }) => {
			const data: CiwUpdateData = {
				id: node.data.id,
				equipmentCosts: formData.equipmentCosts ? convertToNumber(formData.equipmentCosts) : 0,
				estimatedProfit: formData.estimatedProfit ? convertToNumber(formData.estimatedProfit) : 0,
				machineOperatorSalary: 0,
				mainCosts: 0,
				materials: 0,
				mimExploitation: 0,
				overheads: formData.overheads ? convertToNumber(formData.overheads) : 0,
				parentId: node.parentId,
				rowName: formData.rowName,
				salary: formData.salary ? convertToNumber(formData.salary) : 0,
				supportCosts: 0,
			};

			setEditMode(false);

			onUpdateRow(data);
		},
		[onCreateNewRow, convertToNumber],
	);

	const onShowButtonMenu = useCallback(() => {
		if (!menuButtonVisible) setVisible(true);
	}, []);

	const onHideButtonMenu = useCallback(() => {
		setVisible(false);
	}, []);

	const onDoubleRowClick = () => setEditMode(!editMode);

	return (
		<>
			{!editMode && (
				<>
					<DefaultRow
						linesClassName={linesClassName}
						nestingLvl={nestingLvl}
						rowName={node.data.rowName}
						salary={node.data.salary}
						equipmentCosts={node.data.equipmentCosts}
						overheads={node.data.overheads}
						estimatedProfit={node.data.estimatedProfit}
						onDoubleRowClick={onDoubleRowClick}
					>
						<LvlButtonsTemplate
							idRow={node.data.id}
							nestingLvl={nestingLvl}
							editMode={editMode}
							menuButtonVisible={menuButtonVisible}
							onShowButtonMenu={onShowButtonMenu}
							onHideButtonMenu={onHideButtonMenu}
							onAddChildRow={onAddChildRow}
							onDeleteRow={onDeleteRow}
						/>
					</DefaultRow>
				</>
			)}
			{editMode && (
				<>
					<EditableRow
						linesClassName={linesClassName}
						nestingLvl={nestingLvl}
						node={node}
						onSendCreatedRow={onSendCreatedRow}
						onSendEditedRow={onSendEditedRow}
					>
						<LvlButtonsTemplate
							idRow={node.data.id}
							nestingLvl={nestingLvl}
							editMode={editMode}
							menuButtonVisible={menuButtonVisible}
							onShowButtonMenu={onShowButtonMenu}
							onHideButtonMenu={onHideButtonMenu}
							onAddChildRow={onAddChildRow}
							onDeleteRow={onDeleteRow}
						/>
					</EditableRow>
				</>
			)}
		</>
	);
}
