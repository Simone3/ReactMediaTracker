import { config } from 'app/config/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	circle: {
		flex: 0,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		width: 30,
		height: 30,
		margin: 5
	},
	circleNone: {
		backgroundColor: config.ui.colors.grey
	},
	nameInitial: {
		fontSize: 20,
		color: 'white'
	}
});
