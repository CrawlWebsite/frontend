import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from '@frontend/modules/layout';
import { AuthProvider } from '@frontend/modules/auth';
import { store } from '@frontend/redux-store';

import { Routes } from './react-routes/routes';

import './index.css';
import './App.css';

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.glob('./pages/**/!(*.test.[jt]sx)*.([jt]sx)', {
    eager: true,
  });

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes pages={pages} />
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}
