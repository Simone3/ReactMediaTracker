import { connect } from 'react-redux';
import { AddMediaComponent, AddMediaComponentProps } from '../components/generic_media';
import { addMediaActionGenerator, AddMediaAction } from '../actions';
import { Dispatch } from 'redux';

type MapDispatchToProps = (dispatch: any) => AddMediaComponentProps;

const mapDispatchToProps: MapDispatchToProps = (dispatch: Dispatch<AddMediaAction>) => ({
	onSubmit: (newMediaItem) => dispatch(addMediaActionGenerator(newMediaItem))
});

/**
 * Container component that handles Redux state for AddMediaComponent
 */
export const AddMediaContainer = connect(
  null,
  mapDispatchToProps
)(AddMediaComponent);