import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 10,
		width: '100%',
		minHeight: 50
	},
	containerSeparator: {
		borderBottomWidth: 1,
		borderColor: config.ui.colors.separator
	},
	title: {
		fontSize: 18
	},
	subtitle: {
		
	}
});
