import quantityRowsWithLessNesting from "../../lib/quantityRowsWithLessNesting";
import { CiwCreateData, CiwUpdateData } from "../../ts/ApiData";
import { TreeNode } from "../../ts/TreeNode";
import { Row } from "../row/Row";

type ITreeNode = {
	nodes: TreeNode[];
	onAddChildRow: (id: number) => void;
	onCreateNewRow: (data: CiwCreateData, key: string) => void;
	onUpdateRow: (data: CiwUpdateData, key: string) => void;
	onDeleteRow: (id: number) => void;
};

export function TreeRows({ nodes, onAddChildRow, onCreateNewRow, onUpdateRow, onDeleteRow }: ITreeNode) {
	const rows: JSX.Element[] = [];

	const renderRows = (node: TreeNode) => {
		const qRowsWithLessNesting = quantityRowsWithLessNesting(nodes, node.key);
		rows.push(
			<Row
				key={node.data.id}
				qRowsWithLessNesting={qRowsWithLessNesting}
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
