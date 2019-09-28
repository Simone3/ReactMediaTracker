import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		padding: 10,

		width: 30,
		height: 30
	},
	inputButtonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	inputButtonText: {
		marginLeft: 10,
		fontSize: 15,
		flex: 1,
		alignSelf: 'center',
		color: config.ui.colors.colorFormInputs
	}
});