import { Grid, Typography } from '@mui/material';
import { VFC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from 'react-helmet';
import { appConsts } from '../../utils/consts';

const Top: VFC = () => (
  <>
    <Helmet>
      <title>{appConsts.page.top}</title>
    </Helmet>

    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <header>
          <h1>{appConsts.page.topHeader}</h1>
        </header>
        <Typography>
          ゲーム「ポケットモンスター」シリーズの対戦における育成個体管理ツールです。
        </Typography>

        <Typography>育成個体は以下のようなリストで表示されます。</Typography>
        <img
          src={`${process.env.PUBLIC_URL}/img/top/UserPokeList.PNG`}
          alt="UserPokeList.png"
          height="auto"
          width="100%"
        />

        <Typography>
          右上の「ログイン」ボタンからアカウントを登録して早速始めましょう！
        </Typography>
      </Grid>
    </Grid>
  </>
);

export default Top;
