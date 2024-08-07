import { IconsNames } from "../../ts/enums/IconsNames";
import styles from "./Button.module.scss";

type IButton = {
	iconName: IconsNames;
	onClick?: () => void;
};

/**
 * Button component
 */
export default function Button(props: IButton) {
	return (
		<>
			<div className={styles.button} onClick={props.onClick}>
				<img src={`../../../public/${props.iconName}.svg`} alt="icon" />
			</div>
		</>
	);
}
