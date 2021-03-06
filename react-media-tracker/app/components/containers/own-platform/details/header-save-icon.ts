import { HeaderIconComponent, HeaderIconComponentInput, HeaderIconComponentOutput } from 'app/components/presentational/generic/header-icon';
import { requestOwnPlatformSave } from 'app/redux/actions/own-platform/generators';
import { State } from 'app/redux/state/state';
import { images } from 'app/utilities/images';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): HeaderIconComponentInput => {
	
	return {
		source: images.saveButton(),
		clickStatus: state.ownPlatformDetails.valid && state.ownPlatformDetails.saveStatus !== 'SAVING' ? 'ENABLED' : 'DISABLED'
	};
};

const mapDispatchToProps = (dispatch: Dispatch): HeaderIconComponentOutput => {
	
	return {
		onClick: () => {
			dispatch(requestOwnPlatformSave());
		}
	};
};

/**
 * Container component that handles Redux state for HeaderIconComponent
 */
export const OwnPlatformDetailsHeaderSaveIconContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderIconComponent);
