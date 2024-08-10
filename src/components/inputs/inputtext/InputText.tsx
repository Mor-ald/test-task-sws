import { useCallback } from "react";
import styles from "../Inputs.module.scss";
import { IInputText } from "./InputText.types";

/**
 * InputText component
 */
export default function InputText({ field, formData, onChangeFormData, onPressEnter }: IInputText) {
	const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") onPressEnter();
	}, []);

	return (
		<>
			<input
				className={styles["input-text"]}
				type="text"
				value={formData[field]}
				onChange={(e) => onChangeFormData(field, e.target.value)}
				onKeyDown={onKeyDown}
			/>
		</>
	);
}
