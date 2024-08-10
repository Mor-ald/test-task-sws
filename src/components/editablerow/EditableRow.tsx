import styles from "./EditableRow.module.scss";

import { useCallback, useEffect, useRef, useState } from "react";
import { InputNumber, InputText } from "../components";

import { IEditableRow } from "./EditableRow.types";

/**
 * Editable row of tree table component
 */
export default function EditableRow({ linesClassName, nestingLvl, node, children, onSendCreatedRow, onSendEditedRow }: IEditableRow) {
	const [formData, setFormData] = useState({
		rowName: node.data.rowName,
		salary: `${node.data.salary}`,
		equipmentCosts: `${node.data.equipmentCosts}`,
		overheads: `${node.data.overheads}`,
		estimatedProfit: `${node.data.estimatedProfit}`,
	});
	const formDataRef = useRef(formData);

	useEffect(() => {
		formDataRef.current = formData;
	}, [formData]);

	const onChangeFormData = useCallback(
		(field: string, value: string) => {
			setFormData((prevFormData) => ({
				...prevFormData,
				[field]: value,
			}));
		},
		[setFormData],
	);

	const onPressEnter = useCallback(() => {
		!node.editMode ? onSendEditedRow(formDataRef.current) : onSendCreatedRow(formDataRef.current);
	}, [onSendCreatedRow]);

	return (
		<>
			<tr className={styles["row"]}>
				<td className={styles["lvl-col"]} style={{ minWidth: `${55 + 22 * nestingLvl}px` }}>
					<div className={styles[linesClassName]} style={{ marginLeft: `${nestingLvl * 22}px` }}></div>
					{children}
				</td>
				<td>
					<InputText field="rowName" formData={formData} onChangeFormData={onChangeFormData} onPressEnter={onPressEnter} />
				</td>
				<td>
					<InputNumber field="salary" formData={formData} onChangeFormData={onChangeFormData} onPressEnter={onPressEnter} />
				</td>
				<td>
					<InputNumber field="equipmentCosts" formData={formData} onChangeFormData={onChangeFormData} onPressEnter={onPressEnter} />
				</td>
				<td>
					<InputNumber field="overheads" formData={formData} onChangeFormData={onChangeFormData} onPressEnter={onPressEnter} />
				</td>
				<td>
					<InputNumber field="estimatedProfit" formData={formData} onChangeFormData={onChangeFormData} onPressEnter={onPressEnter} />
				</td>
			</tr>
		</>
	);
}
