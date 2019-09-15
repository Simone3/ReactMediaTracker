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
	inputContainer: {
		flex: 1
	},
	input: {
		flex: 1,
		fontSize: 15,
		paddingLeft: 10
	},
	suggestionsContainer: {
		maxHeight: '90%',
		padding: 10,
		backgroundColor: config.ui.colors.colorModalBackground,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	suggestionText: {
		fontSize: 15,
		padding: 10
	}
});
