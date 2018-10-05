import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './translation.config';

const element = document.getElementById('app');

ReactDOM.render(<I18nextProvider i18n={i18next}><App /></I18nextProvider>, element);
