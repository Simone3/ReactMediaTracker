import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	inputContainer: {
		flex: 1
	},
	input: {
		paddingLeft: 10,
		fontSize: 15,
		color: config.ui.colors.colorFormInputs
	},
	modalContent: {
		width: 260,
		height: 350,
		backgroundColor: config.ui.colors.colorModalBackground
	},
	modalInputsContainer: {
		height: 290
	},
	modalInputsList: {
		padding: 20
	},
	modalInputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'flex-start',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: config.ui.colors.colorFormInputs,
		marginBottom: 10
	},
	modalInput: {
		flex: 1
	},
	modalInputButton: {
		flex: 0,
		marginRight: 5
	},
	modalInputText: {
		fontSize: 20
	},
	modalInputAddText: {
		color: config.ui.colors.green
	},
	modalInputRemoveText: {
		color: config.ui.colors.red
	},
	modalButtonsContainer: {
		height: 60,
		padding: 20
	},
	submitText: {
		textTransform: 'uppercase',
		color: config.ui.colors.colorModalButton,
		textAlign: 'right',
		marginRight: 5
	},
	submitTextDisabled: {
		color: config.ui.colors.colorModalButtonDisabled
	}
});
