import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	iconsContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	statusCircle: {
		flex: 0,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		width: 25,
		height: 25,
		margin: 5,
		marginBottom: 10,
		borderWidth: 1
	},
	statusIcon: {
		width: 10,
		height: 10
	},
	optionsContainer: {
		flex: 0,
		marginTop: 10
	},
	optionsIcon: {
		width: 25,
		height: 25
	}
});
