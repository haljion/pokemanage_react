import { Avatar, CardHeader } from '@mui/material';

import { VFC } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { appConsts } from '../../utils/consts';
import { UserPoke } from '../../utils/types';

const UserPokeListCardHeader: VFC<{
  userPoke: UserPoke;
}> = ({ userPoke }) => (
  <CardHeader
    avatar={
      <Avatar
        src={`${process.env.PUBLIC_URL}/img/ball/${userPoke.ball.image}`}
        alt={userPoke.ball.name}
        sx={{ width: 32, height: 32 }}
      />
    }
    action={
      <>
        {userPoke.color === appConsts.param.color.strange && (
          <AutoAwesomeIcon />
        )}
        {userPoke.gender === Number(appConsts.param.gender.male) && <>♂</>}
        {userPoke.gender === Number(appConsts.param.gender.female) && <>♀</>}
        {userPoke.gender === Number(appConsts.param.gender.none) && (
          <span style={{ color: '#e9b825' }}>/</span>
        )}
      </>
    }
    title={`${userPoke.pokemon.name}${
      userPoke.nickname && `(${userPoke.nickname}) `
    }`}
    titleTypographyProps={{ variant: 'h6' }}
    sx={{
      bgcolor: '#e9b825',
      fontSize: 32,
    }}
  />
);

export default UserPokeListCardHeader;
