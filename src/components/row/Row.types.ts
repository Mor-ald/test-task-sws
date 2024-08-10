import { CiwCreateData, CiwUpdateData } from "../../ts/ApiData";
import { TreeNode } from "../../ts/TreeNode";

export type IRow = {
	node: TreeNode;
	onAddChildRow: (id: number) => void;
	onCreateNewRow: (data: CiwCreateData) => void;
	onUpdateRow: (data: CiwUpdateData) => void;
	onDeleteRow: (id: number) => void;
};
