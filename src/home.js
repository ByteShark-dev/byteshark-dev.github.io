import { mountPage } from './app.js';
import { renderHomePage } from './components/HomePage.js';

mountPage({
  pageKey: 'home',
  render: renderHomePage,
});
