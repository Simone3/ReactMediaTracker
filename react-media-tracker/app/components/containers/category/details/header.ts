import { HeaderComponent, HeaderComponentInput } from 'app/components/presentational/generic/header';
import { State } from 'app/redux/state/state';
import { i18n } from 'app/utilities/i18n';
import { ReactNode } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';

const mapStateToProps: MapStateToPropsParam<HeaderComponentInput, CategoryDetailsHeaderContainerProps, State> = (state: State, ownProps: CategoryDetailsHeaderContainerProps): HeaderComponentInput => {
	
	const category = state.categoryDetails.category;

	return {
		title: category && category.id ? category.name : i18n.t('category.details.title.new'),
		icons: ownProps.icons
	};
};

/**
 * Container component that handles Redux state for HeaderComponent
 */
export const CategoryDetailsHeaderContainer = connect(
	mapStateToProps,
	null
)(HeaderComponent);

/**
 * CategoryDetailsHeaderContainer's props
 */
export type CategoryDetailsHeaderContainerProps = {
	
	/**
	 * The optional header icons, shown on the right in the specified order
	 */
	icons?: ReactNode;
}
