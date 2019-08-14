import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',

		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	titleSectionContainer: {
		marginTop: 25,
		marginBottom: 25,

		height: 25
	},
	list: {
		marginTop: 20,
		marginBottom: 20
	},
	rowContainer: {
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 20,
		marginRight: 20,

		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	rowIconContainer: {
		flex: 0,
		alignSelf: 'center',
		alignItems: 'center'
	},
	rowIcon: {
		width: 25,
		height: 25,
		marginRight: 18
	},
	rowLabelContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	rowLabel: {
		color: 'black',
		flex: 0,
		fontSize: 15
	}
});
