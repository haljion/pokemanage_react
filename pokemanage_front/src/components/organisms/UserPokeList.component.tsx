import { Card, CardContent, Grid, Box, Alert } from '@mui/material';

import { VFC } from 'react';
import { UserPoke } from '../../utils/types';

import { appConsts } from '../../utils/consts';

import Pagination from '../../containers/atoms/Pagination.container';
import RemarksAccordion from '../../containers/atoms/RemarksAccordion.container';
import UserPokeListCardHeader from '../../containers/atoms/UserPokeListCardHeader.container';
import WazaList from '../../containers/atoms/WazaList.container';
import StatusList from '../../containers/organisms/StatusList.container';
import AbilityAndItemList from '../../containers/atoms/AbilityAndItemList.container';
import UserPokeListCardActions from '../../containers/organisms/UserPokeListCardActions.container';

const UserPokeList: VFC<{
  page: number;
  pageCount: number | undefined;
  displayedUserPokes: UserPoke[];
  handleChange: (event: React.ChangeEvent<unknown>, index: number) => void;
  onClickEdit: (userPokeId: number) => void;
}> = ({ page, pageCount, displayedUserPokes, handleChange, onClickEdit }) => (
  <Grid container spacing={8} justifyContent="center" alignItems="center">
    {displayedUserPokes.length !== 0 ? (
      <Grid item xs={12}>
        <Pagination count={pageCount} page={page} onChangeFunc={handleChange} />
      </Grid>
    ) : (
      <Alert severity="info">
        まだポケモンが登録されていません。「ポケモン登録」ボタンからあなたのポケモンを登録しましょう！
      </Alert>
    )}

    {displayedUserPokes.map((userPoke) => (
      <Grid item xs={12} md={6} lg={4}>
        <Card
          sx={{
            bgcolor: 'grey.50',
          }}
        >
          <UserPokeListCardHeader userPoke={userPoke} />
          <Grid container justifyContent="center" alignItems="flex-start">
            <Grid item xs={10}>
              <CardContent>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        border: 2,
                        borderColor: 'rgba(0, 0, 0, 0.12)',
                        bgcolor: 'background.paper',
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/img/pokemon/${userPoke.pokemon.image}`}
                        alt={userPoke.pokemon.name}
                        height="auto"
                        width="100%"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={8}>
                    <WazaList userPoke={userPoke} />
                  </Grid>

                  <Grid item xs={12}>
                    <StatusList userPoke={userPoke} />
                  </Grid>

                  <Grid item xs={10}>
                    <AbilityAndItemList userPoke={userPoke} />
                  </Grid>

                  <Grid item xs={2}>
                    {userPoke.item.id !== appConsts.dropdown.itemNon && (
                      <img
                        src={`${process.env.PUBLIC_URL}/img/item/${userPoke.item.image}`}
                        alt={userPoke.item.name}
                        height="auto"
                        width="100%"
                      />
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <RemarksAccordion remarks={userPoke.remarks} />
                  </Grid>
                </Grid>
              </CardContent>

              <UserPokeListCardActions
                userPoke={userPoke}
                onClickEdit={onClickEdit}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    ))}

    {displayedUserPokes.length !== 0 ? (
      <Grid item xs={12}>
        <Pagination count={pageCount} page={page} onChangeFunc={handleChange} />
      </Grid>
    ) : (
      <></>
    )}
  </Grid>
);
export default UserPokeList;
