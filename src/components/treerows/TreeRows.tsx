import { CiwCreateData, CiwUpdateData } from "../../ts/ApiData";
import { TreeNode } from "../../ts/TreeNode";
import { Row } from "../row/Row";

type ITreeNode = {
	nodes: TreeNode[];
	onAddChildRow: (id: number) => void;
	onCreateNewRow: (data: CiwCreateData) => void;
	onUpdateRow: (data: CiwUpdateData) => void;
	onDeleteRow: (id: number) => void;
};

export function TreeRows({ nodes, onAddChildRow, onCreateNewRow, onUpdateRow, onDeleteRow }: ITreeNode) {
	const rows: JSX.Element[] = [];

	const renderRows = (node: TreeNode) => {
		rows.push(
			<Row
				key={node.data.id}
				node={node}
				onCreateNewRow={onCreateNewRow}
				onAddChildRow={onAddChildRow}
				onUpdateRow={onUpdateRow}
				onDeleteRow={onDeleteRow}
			/>,
		);

		if (node.children.length > 0) {
			node.children.forEach((node) => renderRows(node));
		}
	};

	nodes.forEach((node) => renderRows(node));

	return rows;
}
