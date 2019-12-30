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
	}
});
