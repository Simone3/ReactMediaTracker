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
	modalPickerContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	modalPicker: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	},
	modalActionButton: {
		flex: 0,
		justifyContent: 'center',
		alignContent: 'center'
	},
	modalActionButtonIcon: {
		width: 15,
		height: 15
	},
	modalInputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'flex-start',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: config.ui.colors.colorFormInputs,
		marginBottom: 10
	}
});
