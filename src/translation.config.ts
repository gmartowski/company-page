import i18next from 'i18next';
import common_pl from './translations/pl/translations.json';
import common_en from './translations/en/translations.json';

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'pl',
    resources: {
        en: {common: common_en},
        pl: {common: common_pl}
    }
});
