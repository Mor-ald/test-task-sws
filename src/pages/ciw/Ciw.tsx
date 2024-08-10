import { useCallback, useEffect, useState } from "react";
import { TreeTable } from "../../components/components";
import styles from "./Ciw.module.scss";
import { createData, deleteData, fetchData, updateData } from "../../GlobalApi";
import { CiwCreateData, CiwUpdateData } from "../../ts/ApiData";
import { TreeNode } from "../../ts/TreeNode";
import convertToNodes from "../../lib/convertToNodes";

/**
 * Page of construction and installation works
 */
export default function Ciw() {
	const [nodes, setNodes] = useState<TreeNode[]>([]);

	const loadData = useCallback(async () => {
		const data = await fetchData();
		const newNodes = [];

		if (data && data.length !== 0) newNodes.push(...convertToNodes(data));
		else {
			newNodes.push({
				key: "0",
				editMode: true,
				parentId: null,
				data: {
					id: 0,
					equipmentCosts: 0,
					estimatedProfit: 0,
					machineOperatorSalary: 0,
					mainCosts: 0,
					materials: 0,
					mimExploitation: 0,
					overheads: 0,
					rowName: "",
					salary: 0,
					supportCosts: 0,
					total: 0,
				},
				children: [],
			});
		}

		return newNodes;
	}, []);

	const onAddChildRow = useCallback(
		(id: number) => {
			const findNodeById = (nodes: TreeNode[], id: number): TreeNode | null => {
				for (const node of nodes) {
					if (node.data.id === id) return node;
					else if (node.children && node.children.length > 0) {
						const result = findNodeById(node.children, id);
						if (result) return result;
					}
				}

				return null;
			};

			const newNodes = [...nodes];
			const parentNode = findNodeById(newNodes, id);

			parentNode?.children.push({
				key: `${parentNode?.key}-${parentNode?.children.length}`,
				editMode: true,
				parentId: id,
				data: {
					id: 0,
					equipmentCosts: 0,
					estimatedProfit: 0,
					machineOperatorSalary: 0,
					mainCosts: 0,
					materials: 0,
					mimExploitation: 0,
					overheads: 0,
					rowName: "",
					salary: 0,
					supportCosts: 0,
					total: 0,
				},
				children: [],
			});

			setNodes(newNodes);
		},
		[nodes],
	);

	const refreshNodes = useCallback(() => {
		const newNodes = window.sessionStorage.getItem("ciw-nodes") ? JSON.parse(window.sessionStorage.getItem("ciw-nodes")!) : [];
		setNodes(newNodes);
	}, []);

	const onCreateNewRow = useCallback(async (data: CiwCreateData) => {
		await createData(data);
		refreshNodes();
	}, []);

	const onUpdateRow = useCallback(async (data: CiwUpdateData) => {
		await updateData(data);
		refreshNodes();
	}, []);

	const onDeleteRow = useCallback(async (id: number) => {
		await deleteData(id);
		refreshNodes();
	}, []);

	useEffect(() => {
		loadData().then((res) => {
			setNodes(res);
			window.sessionStorage.setItem("ciw-nodes", JSON.stringify(res));
		});
	}, [setNodes]);

	return (
		<>
			<div className={styles.ciw}>
				{nodes.length !== 0 && (
					<TreeTable
						nodes={nodes}
						onCreateNewRow={onCreateNewRow}
						onAddChildRow={onAddChildRow}
						onUpdateRow={onUpdateRow}
						onDeleteRow={onDeleteRow}
					/>
				)}
			</div>
		</>
	);
}
