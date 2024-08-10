export type IDefaultRow = {
	linesClassName: "" | "lines" | "lines-long";
	nestingLvl: number;
	rowName: string;
	salary: number;
	equipmentCosts: number;
	overheads: number;
	estimatedProfit: number;
	children: JSX.Element;
	onDoubleRowClick: () => void;
};
