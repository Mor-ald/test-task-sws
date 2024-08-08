import { CiwData } from "./ApiData";

export interface TreeNode {
	key: string;
	editMode: boolean;
	data: CiwData;
	children: TreeNode[];
}
