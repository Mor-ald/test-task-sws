import { TreeNode } from "../ts/TreeNode";

/**
 * A function to find a Treenode in a TreeNode[] by node.data.id
 *
 * @param {TreeNode[]} nodes - A TreeNode array
 * @param {string} id - The id by which the TreeNode is searched
 * @return {*}  ```TreeNode | null```
 *
 */
export default function findNodeById(nodes: TreeNode[], id: number): TreeNode | null {
	for (const node of nodes) {
		if (node.data.id === id) return node;
		else if (node.children && node.children.length > 0) {
			const result = findNodeById(node.children, id);
			if (result) return result;
		}
	}

	return null;
}
