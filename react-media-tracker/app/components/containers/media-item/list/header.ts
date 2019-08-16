import { HeaderComponent, HeaderComponentInput } from 'app/components/presentational/generic/header';
import { AppError } from 'app/data/models/internal/error';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): HeaderComponentInput => {
	
	const category = state.mediaItemsList.category;
	if(!category) {

		throw AppError.GENERIC.withDetails('List state has no linked category, cannot display header');
	}

	return {
		title: category.name
	};
};

/**
 * Container component that handles Redux state for HeaderComponent
 */
export const MediaItemsListHeaderContainer = connect(
	mapStateToProps,
	null
)(HeaderComponent);
