import { CiwData } from "../ts/ApiData";
import { TreeNode } from "../ts/TreeNode";
import findNodeByKey from "./findNodeByKey";

/**
 * A function to update a node in the session data
 * @param nodes - Array of nodes
 * @param newData - New data return after request (create/update row)
 * @param key - key of the node to create/update
 */
export default function updateNodeInSessionData(nodes: TreeNode[], newData: CiwData, key: string): void {
	const newNodes: TreeNode[] = [...nodes];
	const currentNode = findNodeByKey(newNodes, key)!;

	currentNode.editMode = false;
	currentNode.data = {
		id: newData.id,
		equipmentCosts: newData.equipmentCosts,
		estimatedProfit: newData.estimatedProfit,
		machineOperatorSalary: newData.machineOperatorSalary,
		mainCosts: newData.mainCosts,
		materials: newData.materials,
		mimExploitation: newData.mimExploitation,
		overheads: newData.overheads,
		rowName: newData.rowName,
		salary: newData.salary,
		supportCosts: newData.supportCosts,
		total: newData.total,
	};

	return window.sessionStorage.setItem("ciw-nodes", JSON.stringify(newNodes));
}
