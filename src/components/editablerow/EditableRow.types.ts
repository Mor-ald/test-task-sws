import { TreeNode } from "../../ts/TreeNode";

export type IEditableRow = {
	linesClassName: "" | "lines" | "lines-long";
	nestingLvl: number;
	node: TreeNode;
	children: React.ReactNode;
	onSendCreatedRow: (formData: { rowName: string; salary: string; equipmentCosts: string; overheads: string; estimatedProfit: string }) => void;
	onSendEditedRow: (formData: { rowName: string; salary: string; equipmentCosts: string; overheads: string; estimatedProfit: string }) => void;
};
