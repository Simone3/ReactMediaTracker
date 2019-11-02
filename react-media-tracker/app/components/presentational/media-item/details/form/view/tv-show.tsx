import React, { Component, ReactNode } from 'react';
import { FormikProps } from 'formik';
import { MediaItemFormViewComponent, MediaItemFormViewComponentCommonInput, MediaItemFormViewComponentCommonOutput } from 'app/components/presentational/media-item/details/form/view/media-item';
import { TvShowInternal } from 'app/data/models/internal/media-items/tv-show';
import { TextInputFieldComponent } from 'app/components/presentational/form/fields/text-input';
import { i18n } from 'app/utilities/i18n';
import { images } from 'app/utilities/images';
import { MultiTextInputFieldComponent } from 'app/components/presentational/form/fields/text-input-multiple';
import { DatePickerFieldComponent } from 'app/components/presentational/form/fields/date-picker';
import { ToggleFieldComponent } from 'app/components/presentational/form/fields/toggle-input';

/**
 * Presentational component that contains all TV show form input fields, all handled by the Formik container component
 */
export class TvShowFormViewComponent extends Component<TvShowFormViewComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<MediaItemFormViewComponent
				{...this.props}
				primarySpecificFields={[
					this.durationField(),
					this.creatorsField(),
					this.seasonsField(),
					this.episodesField(),
					this.inProductionField(),
					this.nextEpisodeDateField()
				]}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the duration component
	 */
	private durationField(): ReactNode {

		return (
			<TextInputFieldComponent
				key='durationField'
				name='averageEpisodeRuntimeMinutes'
				placeholder={i18n.t('mediaItem.details.placeholders.duration.TV_SHOW')}
				icon={images.durationField()}
				keyboardType='number-pad'
			/>
		);
	}

	/**
	 * Helper
	 * @returns the creators component
	 */
	private creatorsField(): ReactNode {

		return (
			<MultiTextInputFieldComponent
				key='creatorsField'
				name='creators'
				placeholder={i18n.t('mediaItem.details.placeholders.creators.TV_SHOW')}
				icon={images.creatorField()}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the episodes component
	 */
	private episodesField(): ReactNode {

		return (
			<TextInputFieldComponent
				key='episodesField'
				name='episodesNumber'
				placeholder={i18n.t('mediaItem.details.placeholders.episodesNumber')}
				icon={images.episodesField()}
				keyboardType='number-pad'
			/>
		);
	}

	/**
	 * Helper
	 * @returns the seasons component
	 */
	private seasonsField(): ReactNode {

		return (
			<TextInputFieldComponent
				key='seasonsField'
				name='seasonsNumber'
				placeholder={i18n.t('mediaItem.details.placeholders.seasonsNumber')}
				icon={images.seasonsField()}
				keyboardType='number-pad'
			/>
		);
	}

	/**
	 * Helper
	 * @returns the production component
	 */
	private inProductionField(): ReactNode {
		
		return (
			<ToggleFieldComponent
				key='inProductionField'
				name='inProduction'
				icon={images.inProductionField()}
				placeholder={i18n.t('mediaItem.details.placeholders.inProduction')}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the next episode date component
	 */
	private nextEpisodeDateField(): ReactNode {

		if(this.props.values.inProduction) {

			return (
				<DatePickerFieldComponent
					key='nextEpisodeDateField'
					name='nextEpisodeAirDate'
					icon={images.nextEpisodeDateField()}
					placeholder={i18n.t('mediaItem.details.placeholders.nextEpisodeAirDate')}
				/>
			);
		}
		else {

			return null;
		}
	}
}

/**
 * TvShowFormViewComponent's input props
 */
export type TvShowFormViewComponentInput = MediaItemFormViewComponentCommonInput;

/**
 * TvShowFormViewComponent's output props
 */
export type TvShowFormViewComponentOutput = MediaItemFormViewComponentCommonOutput;

/**
 * All props of TvShowFormViewComponent
 */
export type TvShowFormViewComponentProps = FormikProps<TvShowInternal> & TvShowFormViewComponentInput & TvShowFormViewComponentOutput;
