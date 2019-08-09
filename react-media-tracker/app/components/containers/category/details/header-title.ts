import { HeaderTitleComponent, HeaderTitleComponentInput, HeaderTitleComponentOutput } from 'app/components/presentational/generic/header-title';
import { State } from 'app/data/models/internal/state/state';
import { requestCategorySave } from 'app/redux/actions/category/generators';
import { i18n } from 'app/utilities/i18n';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): HeaderTitleComponentInput => {
	
	const category = state.categoryDetails.category;

	return {
		title: category && category.id ? category.name : i18n.t('category.details.title.new'),
		icon: require('app/resources/images/ic_save.png'),
		iconClickStatus: state.categoryDetails.valid ? 'ENABLED' : 'DISABLED'
	};
};

const mapDispatchToProps = (dispatch: Dispatch): HeaderTitleComponentOutput => {
	
	return {
		onIconClick: () => {
			dispatch(requestCategorySave());
		}
	};
};

/**
 * Container component that handles Redux state for HeaderTitleComponent
 */
export const CategoryDetailsHeaderTitleContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderTitleComponent);
