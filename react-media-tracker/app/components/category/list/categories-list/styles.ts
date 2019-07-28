import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	list: {
		alignSelf: 'stretch',
		width: Dimensions.get('window').width
	},
	emptyMessage: {
		fontSize: 20
	}
});
