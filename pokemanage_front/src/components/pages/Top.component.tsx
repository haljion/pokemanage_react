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
        <Typography>
          ボックスに「どういう意図の調整か忘れた...」「同じポケモンを複数育てたけど、どれがどれだったか...」といった個体はいませんか？
        </Typography>
        <Typography>PokeManage はそのような悩みを解決します。</Typography>

        <Typography>育成個体は以下のようなリストで表示されます。</Typography>
        <img
          src={`${process.env.PUBLIC_URL}/img/top/UserPokeList.PNG`}
          alt="UserPokeList.png"
          height="auto"
          width="100%"
        />

        <Typography>以下のようなフォームから各データを入力します。</Typography>
        <img
          src={`${process.env.PUBLIC_URL}/img/top/UserPokeNew.PNG`}
          alt="UserPokeNew.png"
          height="auto"
          width="100%"
        />
      </Grid>
    </Grid>
  </>
);

export default Top;
