import { VFC } from 'react';
import AbilityAndItemList from '../../components/atoms/AbilityAndItemList.component';

import { UserPoke } from '../../utils/types';

const EnhancedAbilityAndItemList: VFC<{ userPoke: UserPoke }> = ({
  userPoke,
}) => <AbilityAndItemList userPoke={userPoke} />;

export default EnhancedAbilityAndItemList;
