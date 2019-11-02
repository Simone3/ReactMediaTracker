import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	imageContainer: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 170,
		width: 310,
		resizeMode: 'center'
	},
	buttonsContainer: {
		flex: 0,
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center'
	},
	buttonIcon: {
		width: 30,
		height: 30,
		margin: 10
	},
	buttonIconDisabled: {
		opacity: 0.5
	}
});