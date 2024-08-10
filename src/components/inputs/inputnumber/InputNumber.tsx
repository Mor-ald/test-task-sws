import { useCallback } from "react";
import styles from "../Inputs.module.scss";
import { IInputNumber } from "./InputNumber.types";

/**
 * InputNumber component
 */
export default function InputNumber({ field, formData, onChangeFormData, onPressEnter }: IInputNumber) {
	const convertToStringNumberWithSpaces = (number: string): string => {
		const parts = number.split(",");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

		return parts.join(",");
	};

	const clearNumber = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			const target = e.target as HTMLInputElement;
			if (e.code === "Backspace" && target.value === "0,") {
				return onChangeFormData(field, "");
			}
		},
		[onChangeFormData],
	);

	const validateNumber = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>, simAfterComma: number) => {
			let number = e.target.value.split(" ").join("");
			const regex = /^[0-9,]*$/;
			const numberSplit = number.split(",");

			if (!number) return onChangeFormData(field, "");

			if (regex.test(number)) {
				if ((number.length === 1 && number === "0") || (numberSplit[0][0] === "0" && numberSplit[0].length > 1)) return onChangeFormData(field, "0,");
				if ((number.includes(",") && numberSplit[1].length > simAfterComma) || (number.match(/,/g) || []).length > 1)
					number = number.slice(0, number.length - 1);

				return onChangeFormData(field, convertToStringNumberWithSpaces(number));
			}
		},
		[onChangeFormData],
	);

	const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onPressEnter();
		} else clearNumber(e);
	}, []);

	return (
		<>
			<input className={styles["input-number"]} type="text" value={formData[field]} onChange={(e) => validateNumber(e, 6)} onKeyDown={onKeyDown} />
		</>
	);
}
