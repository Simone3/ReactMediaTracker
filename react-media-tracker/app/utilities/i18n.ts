// eslint-disable-next-line import/extensions
import en from 'app/resources/lang/lang-en.json';
import i18nJs from 'i18n-js';

i18nJs.defaultLocale = 'en';
i18nJs.locale = 'en';
i18nJs.fallbacks = true;
i18nJs.translations = {
	en: en
};

export const i18n = i18nJs;
