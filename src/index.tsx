import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_pl from './translations/pl/commons.json';
import common_en from './translations/en/commons.json';

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'pl',
    resources: {
        en: {
            common: common_en
        },
        pl: {
            common: common_pl
        },
    },
});

const element = document.getElementById('app');

ReactDOM.render(<I18nextProvider i18n={i18next}><App /></I18nextProvider>, element);
