import { VFC } from 'react';
import { useNavigate } from 'react-router';
import UserPoke from '../../components/pages/UserPoke.component';
import { appConsts } from '../../utils/consts';

const EnhancedUserPoke: VFC = () => {
  const navigate = useNavigate();

  const onClickNew = () => {
    navigate(appConsts.url.new);
  };

  return <UserPoke onClickNew={onClickNew} />;
};

export default EnhancedUserPoke;
