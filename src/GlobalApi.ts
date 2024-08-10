import axios from "axios";
import { CiwCreateData, CiwUpdateData } from "./ts/ApiData";

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
export const createData = async (data: CiwCreateData) =>
	await axios
		.post(`${import.meta.env.VITE_APP_PATH}/row/create`, data)
		.then((res) => console.log(res.data.current))
		.catch((e) => {
			console.log(e);
		});

/**
 * Update current data in API
 */
export const updateData = async (data: CiwUpdateData) =>
	await axios
		.post(`${import.meta.env.VITE_APP_PATH}/row/${data.id}/update`, data)
		.then((res) => res.data.current)
		.catch((e) => {
			console.log(e);
		});

/**
 * Delete current data in API
 */
export const deleteData = async (rowId: number) =>
	await axios
		.delete(`${import.meta.env.VITE_APP_PATH}/row/${rowId}/delete`)
		.then((res) => res.data)
		.catch((e) => {
			console.log(e);
		});
