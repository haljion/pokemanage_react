import { VFC } from 'react';
import { useQuery } from 'react-query';

import { useNavigate } from 'react-router';
import { getUserPokes } from '../../utils/callApiFunctions';
import UserPokeList from '../../components/organisms/UserPokeList.component';
import { getUserId, sortUserPokesById } from '../../utils/utilFunctions';
import { appConsts } from '../../utils/consts';
import { usePagination } from '../../hooks/usePagination';

const EnhancedUserPokeList: VFC = () => {
  const userId = getUserId();
  const { data: userPokes = [] } = useQuery('userPokes', () =>
    getUserPokes(userId),
  );

  const [page, pageCount, displayedUserPokes, handleChange] = usePagination(
    sortUserPokesById(userPokes),
  );

  const navigate = useNavigate();
  const onClickEdit = (userPokeId: number) => {
    navigate(`${appConsts.url.edit}/${userPokeId}`);
  };

  return (
    <UserPokeList
      page={page}
      pageCount={pageCount}
      displayedUserPokes={displayedUserPokes}
      handleChange={handleChange}
      onClickEdit={onClickEdit}
    />
  );
};

export default EnhancedUserPokeList;
