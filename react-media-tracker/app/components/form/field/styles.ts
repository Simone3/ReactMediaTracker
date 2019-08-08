import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 0,
		borderBottomWidth: 1,
		borderColor: 'black',
		marginBottom: 10
	},
	containerError: {
		borderColor: 'red'
	},
	containerFocus: {
		borderColor: config.ui.colors.colorAccent
	}
});
