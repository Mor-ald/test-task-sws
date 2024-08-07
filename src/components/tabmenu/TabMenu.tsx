import { useCallback, useState } from "react";
import styles from "./TabMenu.module.scss";
import Tab from "../tab/Tab";

type ITabMenu = {
	tabs: { active: boolean; tabName: string }[];
};

/**
 * TabMenu component
 */
export default function TabMenu(props: ITabMenu) {
	const [tabs, setTabs] = useState(props.tabs);

	const setActiveTab = useCallback(
		(tabName: string) => {
			const newTabs = [...tabs.map((tab) => ({ active: false, tabName: tab.tabName }))];

			newTabs.find((tab) => tab.tabName === tabName)!.active = true;

			setTabs(newTabs);
		},
		[tabs, setTabs],
	);

	return (
		<>
			<div className={styles["tab-menu"]}>
				{tabs.map((tab) => (
					<Tab key={tab.tabName} active={tab.active} tabName={tab.tabName} setActiveTab={setActiveTab} />
				))}
			</div>
		</>
	);
}
