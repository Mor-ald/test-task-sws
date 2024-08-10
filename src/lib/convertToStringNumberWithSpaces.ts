/**
 * A function to convert number to string number with spaces.
 * Ex: from 1234.567 to '1 234,567'
 *
 * @param {number} number - A number for convert
 * @return {*}  {string}
 *
 */
export default function convertToStringNumberWithSpaces(number: string): string {
	const parts = number.split(",");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

	return parts.join(",");
}
