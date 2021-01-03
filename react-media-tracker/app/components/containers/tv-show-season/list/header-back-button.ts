import { HeaderBackComponent, HeaderBackComponentInput, HeaderBackComponentOutput } from 'app/components/presentational/generic/header-back';
import { completeTvShowSeasonsHandling } from 'app/redux/actions/tv-show-season/generators';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (): HeaderBackComponentInput => {
	
	return {
		disabled: false
	};
};

const mapDispatchToProps = (dispatch: Dispatch): HeaderBackComponentOutput => {

	return {
		onClick: () => {
			
			dispatch(completeTvShowSeasonsHandling());
		}
	};
};

/**
 * Container component that handles Redux state for HeaderBackComponent
 */
export const TvShowSeasonsListHeaderBackButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderBackComponent);

/**
 * TvShowSeasonsListHeaderBackButtonContainer's props
 */
export type TvShowSeasonsListHeaderBackButtonContainerProps = {
	
	/**
	 * The navigation data
	 */
	navigation: NavigationScreenProp<object>;
}

