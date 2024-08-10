export type ILvlButtonsTemplate = {
	idRow: number;
	nestingLvl: number;
	editMode: boolean;
	menuButtonVisible: boolean;
	onShowButtonMenu: () => void;
	onHideButtonMenu: () => void;
	onAddChildRow: (id: number) => void;
	onDeleteRow: (id: number) => void;
};
