import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',

		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,

		borderBottomWidth: 1,
		borderColor: 'rgb(219,219,219)'
	},
	primaryIconContainer: {
		flex: 0
	},
	dataContainer: {
		flex: 1,
		marginRight: 10,
		marginLeft: 10
	},
	secondaryIconsContainer: {
		flex: 0
	}
});
