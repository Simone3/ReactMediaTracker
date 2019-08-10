import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {

		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',

		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 18,
		paddingRight: 18,

		marginLeft: 14,
		marginRight: 14,
		marginTop: 3,
		marginBottom: 3
	},
	nameContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	name: {
		flex: 0,
		fontSize: 20
	}
});
