import { ApiCiwData } from "../ts/ApiData";
import { TreeNode } from "../ts/TreeNode";

/**
 * A function to convert data from API to nodes
 * @param data - New data from API
 * @param parentKey - Key of parent node
 * @param parentId - ID of parent node
 * @returns {*} ```TreeNode[]```
 */
export default function convertToNodes(data: ApiCiwData, parentKey: string | null = null, parentId: number | null = null): TreeNode[] {
	return data.map((item, index) => {
		const key = parentKey ? `${parentKey}-${index}` : index.toString();
		const node: TreeNode = {
			key,
			editMode: false,
			parentId: parentId,
			data: { ...item },
			children: item.child.length > 0 ? convertToNodes(item.child, key, item.id) : [],
		};

		return node;
	});
}
