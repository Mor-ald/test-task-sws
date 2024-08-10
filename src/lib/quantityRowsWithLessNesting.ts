import { TreeNode } from "../ts/TreeNode";
import findNodeByKey from "./findNodeByKey";

export default function quantityRowsWithLessNesting(nodes: TreeNode[], key: string): number {
	let quantityRowsWithLessNesting = 0;
	const rowBeforeCurrentKey = key.at(-1) === "0" ? null : key.slice(0, -1) + `${Number(key.at(-1)) - 1}`;

	const takeQuantity = (node: TreeNode) => {
		quantityRowsWithLessNesting += node.children.length;

		if (node.children.length !== 0) node.children.map((node) => takeQuantity(node));
	};

	if (!rowBeforeCurrentKey) return 0;
	else {
		const nodeBeforeCurrent = findNodeByKey(nodes, rowBeforeCurrentKey)!;
		takeQuantity(nodeBeforeCurrent);
		return quantityRowsWithLessNesting;
	}
}
