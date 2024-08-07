import styles from "./Tab.module.scss";

type ITab = {
	active: boolean;
	tabName: string;
	setActiveTab: (tabName: string) => void;
};

/**
 * Tab component
 */
export default function Tab(props: ITab) {
	return (
		<>
			<div className={props.active ? styles["tab-active"] : styles["tab"]} onClick={() => props.setActiveTab(props.tabName)}>
				{props.tabName}
			</div>
		</>
	);
}
