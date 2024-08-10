export interface CiwData {
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
	child: CiwData[];
}

export interface CiwCreateData {
	equipmentCosts: number;
	estimatedProfit: number;
	machineOperatorSalary: 0;
	mainCosts: 0;
	materials: 0;
	mimExploitation: 0;
	overheads: number;
	parentId: number | null;
	rowName: string;
	salary: number;
	supportCosts: 0;
}

export interface CiwUpdateData {
	id: number;
	equipmentCosts: number;
	estimatedProfit: number;
	machineOperatorSalary: 0;
	mainCosts: 0;
	materials: 0;
	mimExploitation: 0;
	overheads: number;
	parentId: number | null;
	rowName: string;
	salary: number;
	supportCosts: 0;
}

export type ApiCiwData = CiwData[];
