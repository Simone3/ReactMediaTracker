import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center'
	},
	leftContainer: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center',
		marginLeft: 10
	},
	titleContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 5
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
		justifyContent: 'flex-end',
		alignContent: 'center',
		marginRight: 10
	}
});
