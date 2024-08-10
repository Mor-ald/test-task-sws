export type IInputNumber = {
	field: keyof {
		rowName: string;
		salary: string;
		equipmentCosts: string;
		overheads: string;
		estimatedProfit: string;
	};
	formData: {
		rowName: string;
		salary: string;
		equipmentCosts: string;
		overheads: string;
		estimatedProfit: string;
	};
	onChangeFormData: (field: string, value: string) => void;
	onPressEnter: () => void;
};
