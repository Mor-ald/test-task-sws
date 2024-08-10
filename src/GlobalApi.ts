import axios from "axios";
import { CiwCreateData, CiwUpdateData } from "./ts/ApiData";
import updateNodeInSessionData from "./lib/updateNodeInSessionData";
import { TreeNode } from "./ts/TreeNode";
import deleteNodeInSessionData from "./lib/deleteNodeInSessionData";

/**
 * Fetch data from API
 */
export const fetchData = async () =>
	await axios
		.get(`${import.meta.env.VITE_APP_PATH}/row/list`)
		.then((res) => res.data)
		.catch((e) => {
			console.log(e);
		});

/**
 * Create new data in API
 */
export const createData = async (data: CiwCreateData, nodes: TreeNode[], key: string) =>
	await axios
		.post(`${import.meta.env.VITE_APP_PATH}/row/create`, data)
		.then((res) => updateNodeInSessionData(nodes, res.data.current, key))
		.catch((e) => {
			console.log(e);
		});

/**
 * Update current data in API
 */
export const updateData = async (data: CiwUpdateData, nodes: TreeNode[], key: string) =>
	await axios
		.post(`${import.meta.env.VITE_APP_PATH}/row/${data.id}/update`, data)
		.then((res) => updateNodeInSessionData(nodes, res.data.current, key))
		.catch((e) => {
			console.log(e);
		});

/**
 * Delete current data in API
 */
export const deleteData = async (rowId: number, nodes: TreeNode[]) =>
	await axios
		.delete(`${import.meta.env.VITE_APP_PATH}/row/${rowId}/delete`)
		.then(() => deleteNodeInSessionData(nodes, rowId))
		.catch((e) => {
			console.log(e);
		});
