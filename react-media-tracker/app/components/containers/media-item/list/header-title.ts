import { HeaderTitleComponent, HeaderTitleComponentInput } from 'app/components/presentational/generic/header-title';
import { AppError } from 'app/data/models/internal/error';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): HeaderTitleComponentInput => {
	
	const category = state.mediaItemsList.category;
	if(!category) {

		throw AppError.GENERIC.withDetails('List state has no linked category, cannot display header');
	}

	return {
		title: category.name
	};
};

/**
 * Container component that handles Redux state for HeaderTitleComponent
 */
export const MediaItemDetailsHeaderTitleContainer = connect(
	mapStateToProps,
	null
)(HeaderTitleComponent);
