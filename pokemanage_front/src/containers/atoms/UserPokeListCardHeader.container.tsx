import { VFC } from 'react';
import UserPokeListCardHeader from '../../components/atoms/UserPokeListCardHeader.component';

import { UserPoke } from '../../utils/types';

const EnhancedUserPokeListCardHeader: VFC<{
  userPoke: UserPoke;
}> = ({ userPoke }) => <UserPokeListCardHeader userPoke={userPoke} />;

export default EnhancedUserPokeListCardHeader;
