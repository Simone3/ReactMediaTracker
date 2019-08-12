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

		marginLeft: 14,
		marginRight: 14,
		marginTop: 3,
		marginBottom: 3
	},
	iconContainer: {
		flex: 0,
		alignSelf: 'center',
		alignItems: 'center'
	},
	icon: {
		width: 40,
		height: 40,
		marginRight: 18
	},
	nameContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	name: {
		color: 'white',
		flex: 0,
		fontSize: 20
	}
});
