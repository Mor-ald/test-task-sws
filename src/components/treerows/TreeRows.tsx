import { TreeNode } from "../../ts/TreeNode";
import { Row } from "../row/Row";

type ITreeNode = {
	nodes: TreeNode[];
};

export function TreeRows({ nodes }: ITreeNode) {
	const rows: JSX.Element[] = [];

	const renderRows = (node: TreeNode) => {
		rows.push(<Row key={node.key} node={node} />);

		if (node.children.length > 0) {
			node.children.forEach((node) => renderRows(node));
		}
	};

	nodes.forEach((node) => renderRows(node));

	return rows;
}
