import { VFC } from 'react';
import { appConsts } from '../../utils/consts';

const UserPokeStatus: VFC<{
  status: number;

  personalityFlag: number;
}> = ({ status, personalityFlag }) => {
  if (personalityFlag === appConsts.param.personality.status.up) {
    return <span style={{ color: 'red' }}>{status}</span>;
  }

  if (personalityFlag === appConsts.param.personality.status.down) {
    return <span style={{ color: 'blue' }}>{status}</span>;
  }

  return <span>{status}</span>;
};

export default UserPokeStatus;
