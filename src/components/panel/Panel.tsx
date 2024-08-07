import styles from "./Panel.module.scss";

type IPanel = {
	header: string;
};

/**
 * Panel component
 */
export default function Panel(props: IPanel) {
	return (
		<>
			<div className={styles.panel}>{props.header}</div>
		</>
	);
}
