import { mountPage } from './app.js';
import { renderAphidexPage } from './components/AphidexPage.js';

mountPage({
  pageKey: 'aphidex',
  render: renderAphidexPage,
});
