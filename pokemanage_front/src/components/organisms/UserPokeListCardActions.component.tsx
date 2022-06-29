import { VFC } from 'react';
import { CardActions, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { UserPoke } from '../../utils/types';
import UserPokeDeleteModal from '../../containers/atoms/UserPokeDeleteModal.container';

const UserPokeListCardActions: VFC<{
  userPoke: UserPoke;
  onClickEdit: (userPokeId: number) => void;
}> = ({ userPoke, onClickEdit }) => (
  <CardActions>
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <div style={{ textAlign: 'center' }}>
          <IconButton onClick={() => onClickEdit(userPoke.id)}>
            <EditIcon />
          </IconButton>
        </div>
      </Grid>

      <Grid item xs={6}>
        <UserPokeDeleteModal userPoke={userPoke} />
      </Grid>
    </Grid>
  </CardActions>
);

export default UserPokeListCardActions;
