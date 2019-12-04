import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 25,
		paddingRight: 25,
		borderWidth: 1,
		borderColor: config.ui.colors.separator,
		borderRadius: 25
	}
});
