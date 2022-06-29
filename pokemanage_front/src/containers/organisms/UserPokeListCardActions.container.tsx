import { VFC } from 'react';
import UserPokeListCardActions from '../../components/organisms/UserPokeListCardActions.component';

import { UserPoke } from '../../utils/types';

const EnhancedUserPokeListCardActions: VFC<{
  userPoke: UserPoke;
  onClickEdit: (userPokeId: number) => void;
}> = ({ userPoke, onClickEdit }) => (
  <UserPokeListCardActions userPoke={userPoke} onClickEdit={onClickEdit} />
);

export default EnhancedUserPokeListCardActions;
