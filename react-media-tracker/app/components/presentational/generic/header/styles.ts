import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center'
	},
	leftContainer: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center'
	},
	titleContainer: {
		flex: 1,
		margin: 10,
		marginLeft: 15,
		justifyContent: 'center'
	},
	title: {
		fontSize: 20,
		color: config.ui.colors.colorContrastText,
		fontWeight: 'bold',
		textAlignVertical: 'center'
	},
	rightContainer: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		marginRight: 10
	}
});
