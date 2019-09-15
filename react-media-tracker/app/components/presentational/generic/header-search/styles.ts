import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	searchModeContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 10
	},
	searchBarInput: {
		color: config.ui.colors.colorContrastText
	}
});
