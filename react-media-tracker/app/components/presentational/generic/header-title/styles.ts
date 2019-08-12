import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	title: {
		fontSize: 20,
		flex: 1,
		alignSelf: 'center',
		margin: 10,
		marginLeft: 15,
		color: 'white',
		fontWeight: 'bold'
	},
	icon: {
		margin: 10,
		marginRight: 15,
		alignSelf: 'center',
		width: 30,
		height: 30
	},
	iconDisabled: {
		opacity: 0.5
	}
});
