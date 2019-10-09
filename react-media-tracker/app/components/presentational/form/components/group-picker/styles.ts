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
		height: 250,
		backgroundColor: config.ui.colors.colorModalBackground
	},
	modalInputsContainer: {
		height: 190,
		padding: 15
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
