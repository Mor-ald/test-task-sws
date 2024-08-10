import { TreeNode } from "../ts/TreeNode";
import filterNodesById from "./filterNodesById";

export default function deleteNodeInSessionData(nodes: TreeNode[], id: number) {
	const newNodes = filterNodesById(nodes, id);

	return window.sessionStorage.setItem("ciw-nodes", JSON.stringify(newNodes));
}
