import { VFC } from 'react';
import WazaList from '../../components/atoms/WazaList.component';

import { UserPoke } from '../../utils/types';

const EnhancedWazaList: VFC<{ userPoke: UserPoke }> = ({ userPoke }) => (
  <WazaList userPoke={userPoke} />
);

export default EnhancedWazaList;
