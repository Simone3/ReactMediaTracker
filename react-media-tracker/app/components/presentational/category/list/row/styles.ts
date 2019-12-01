import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		borderRadius: 2,
		
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',

		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 18,
		paddingRight: 18,
		
		marginTop: 3,
		marginBottom: 3
	},
	iconContainer: {
		flex: 0,
		alignSelf: 'center',
		alignItems: 'center'
	},
	icon: {
		width: 30,
		height: 30,
		marginRight: 18
	},
	nameContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	name: {
		color: config.ui.colors.colorContrastText,
		flex: 0,
		fontSize: 20
	}
});
