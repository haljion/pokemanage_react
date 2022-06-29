import { VFC } from 'react';
import UserPokeStatus from '../../components/atoms/UserPokeStatus.component';

import { UserPoke } from '../../utils/types';
import { getPersonalityFlag, getStatus } from '../../utils/utilFunctions';

const EnhancedUserPokeStatus: VFC<{ userPoke: UserPoke; statusVal: number }> =
  ({ userPoke, statusVal }) => {
    const personalityFlag = getPersonalityFlag(userPoke.personality, statusVal);
    const status = getStatus(userPoke, statusVal);

    return <UserPokeStatus status={status} personalityFlag={personalityFlag} />;
  };

export default EnhancedUserPokeStatus;
