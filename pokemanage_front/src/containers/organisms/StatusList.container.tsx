import { VFC } from 'react';
import StatusList from '../../components/organisms/StatusList.component';

import { UserPoke } from '../../utils/types';

const EnhancedStatusList: VFC<{ userPoke: UserPoke }> = ({ userPoke }) => (
  <StatusList userPoke={userPoke} />
);

export default EnhancedStatusList;
