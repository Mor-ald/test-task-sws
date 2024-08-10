import { TreeNode } from "../ts/TreeNode";

/**
 * A function to filter a nodes in a TreeNode[] by node.data.id
 *
 * @param {TreeNode[]} nodes - A TreeNode array
 * @param {string} id - The id of treenode
 * @return {*}  ```TreeNode[] | null```
 *
 */
export default function filterNodesById(nodes: TreeNode[], id: number): TreeNode[] {
	return nodes.filter((node) => {
		if (node.data.id === id) {
			return false;
		} else if (node.children) {
			node.children = filterNodesById(node.children, id);
		}
		return true;
	});
}
