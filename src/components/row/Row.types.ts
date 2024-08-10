import { CiwCreateData, CiwUpdateData } from "../../ts/ApiData";
import { TreeNode } from "../../ts/TreeNode";

export type IRow = {
	qRowsWithLessNesting: number;
	node: TreeNode;
	onAddChildRow: (id: number) => void;
	onCreateNewRow: (data: CiwCreateData, key: string) => void;
	onUpdateRow: (data: CiwUpdateData, key: string) => void;
	onDeleteRow: (id: number) => void;
};
