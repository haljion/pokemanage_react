import { Button, Grid } from '@mui/material';
import { Suspense, VFC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from 'react-helmet';

import UserPokeList from '../../containers/organisms/UserPokeList.container';
import { appConsts } from '../../utils/consts';

const UserPoke: VFC<{ onClickNew: () => void }> = ({ onClickNew }) => (
  <>
    <Helmet>
      <title>{appConsts.page.list}</title>
    </Helmet>
    <Grid container justifyContent="center" alignItems="flex-start">
      <Grid item xs={10}>
        <header>
          <h1>{appConsts.page.list}</h1>
        </header>

        <Button variant="contained" size="large" onClick={() => onClickNew()}>
          ポケモン登録
        </Button>

        <Suspense fallback={<div>Loading...</div>}>
          <UserPokeList />
        </Suspense>
      </Grid>
    </Grid>
  </>
);

export default UserPoke;
