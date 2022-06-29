import { VFC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import PrivateRoute from './libs/PrivateRoute';

import UserPoke from './containers/pages/UserPoke.container';
import UserPokeNew from './containers/pages/UserPokeNew.container';

import './static/sass/App.css';
import UserPokeEdit from './containers/pages/UserPokeEdit.container';
import Header from './containers/organisms/Header.container';

const App: VFC = () => (
  <>
    <Header />
    <Routes>
      <Route
        index
        element={
          <PrivateRoute>
            <UserPoke />
          </PrivateRoute>
        }
      />
      <Route path="userpoke">
        <Route
          path="new"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <UserPokeNew />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="edit/:userPokeId"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <UserPokeEdit />
              </Suspense>
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
