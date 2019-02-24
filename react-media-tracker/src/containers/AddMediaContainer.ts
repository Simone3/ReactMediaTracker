import { connect } from 'react-redux';
import { AddMediaComponent, AddMediaComponentProps } from '../components/generic_media';
import { addMediaActionGenerator } from '../actions';

type MapDispatchToProps = (dispatch: any) => AddMediaComponentProps;

const mapDispatchToProps: MapDispatchToProps = (dispatch) => ({
	onSubmit: (newMediaItem) => dispatch(addMediaActionGenerator(newMediaItem))
});

export const AddMediaContainer = connect(
  null,
  mapDispatchToProps
)(AddMediaComponent);