export interface TreeNode {
	key: string;
	editMode: boolean;
	parentId: number | null;
	data: {
		id: number;
		equipmentCosts: number;
		estimatedProfit: number;
		machineOperatorSalary: number;
		mainCosts: number;
		materials: number;
		mimExploitation: number;
		overheads: number;
		rowName: string;
		salary: number;
		supportCosts: number;
		total: number;
	};
	children: TreeNode[];
}
