import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction, VFC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { UserPoke } from '../../utils/types';

const UserPokeDeleteModal: VFC<{
  userPoke: UserPoke;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClickDelete: (id: number) => void;
  customStyles: {
    content: {
      top: string;
      left: string;
      right: string;
      bottom: string;
      marginRight: string;
      transform: string;
    };
  };
}> = ({ userPoke, isOpen, setIsOpen, onClickDelete, customStyles }) => (
  <>
    <div style={{ textAlign: 'center' }}>
      <IconButton onClick={() => setIsOpen(true)}>
        <DeleteForeverIcon />
      </IconButton>
    </div>
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Card>
        <CardHeader title="本当に削除しますか？" />
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/img/pokemon/${userPoke.pokemon.image}`}
          alt={userPoke.pokemon.name}
        />
        <CardContent>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="body1" component="span">
              {`${userPoke.pokemon.name}${
                userPoke.nickname && `(${userPoke.nickname}) `
              }`}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <div style={{ textAlign: 'center' }}>
                <IconButton onClick={() => onClickDelete(userPoke.id)}>
                  <CheckCircleIcon />
                </IconButton>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div style={{ textAlign: 'center' }}>
                <IconButton onClick={() => setIsOpen(false)}>
                  <CancelIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Modal>
  </>
);

export default UserPokeDeleteModal;
