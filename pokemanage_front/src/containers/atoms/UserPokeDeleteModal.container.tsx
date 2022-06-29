import { useState, VFC } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import UserPokeDeleteModal from '../../components/atoms/UserPokeDeleteModal.component';
import { deleteUserPoke } from '../../utils/callApiFunctions';
import { appConsts } from '../../utils/consts';
import { UserPoke } from '../../utils/types';

const EnhancedUserPokeDeleteModal: VFC<{ userPoke: UserPoke }> = ({
  userPoke,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation((id: string) => deleteUserPoke(id), {
    onSuccess: () => {
      void queryClient.resetQueries('userPokes');
    },
  });

  const onClickDelete = (id: number) => {
    mutate(String(id));
    setIsOpen(false);
    navigate(appConsts.url.root, { replace: true });
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <UserPokeDeleteModal
      userPoke={userPoke}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickDelete={onClickDelete}
      customStyles={customStyles}
    />
  );
};
export default EnhancedUserPokeDeleteModal;
