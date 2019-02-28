import { connect } from 'react-redux';
import { MediaListComponent, MediaListComponentProps } from '../components/generic_media';
import { State } from '../model';

type MapStateToProps = (state: State) => MediaListComponentProps;

const mapStateToProps: MapStateToProps = (state) => ({
  itemsList: state.mediaItems
});

/**
 * Container component that handles Redux state for MediaListComponent
 */
export const MediaListContainer = connect(
  mapStateToProps,
  null
)(MediaListComponent);
