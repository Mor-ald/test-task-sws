import { TreeNode } from "../ts/TreeNode";

/**
 * A function to find a Treenode in a TreeNode[] by node.key
 *
 * @param {TreeNode[]} nodes - A TreeNode array
 * @param {string} key - The key by which the TreeNode is searched
 * @return {*} ```TreeNode | undefined```
 *
 */
export default function findNodeByKey(nodes: TreeNode[], key: string): TreeNode | undefined {
	const path = key.split("-");
	let node;

	while (path.length) {
		const list: TreeNode[] | undefined = node ? node.children : nodes;
		node = list![parseInt(path[0], 10)];
		path.shift();
	}

	return node;
}
