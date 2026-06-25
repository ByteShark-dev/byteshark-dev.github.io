import { mountPage } from './app.js';
import { renderCasesPage } from './components/CasesPage.js';

mountPage({
  pageKey: 'cases',
  render: renderCasesPage,
});
