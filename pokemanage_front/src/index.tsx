import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

const root: HTMLElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain="pokemanage.us.auth0.com"
        clientId="r21n9i3oY7FYNjUSVvWMuhsZUaNOcTxA"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  </BrowserRouter>,
  root,
);

reportWebVitals();
