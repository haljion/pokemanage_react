import { ThemeProvider } from '@emotion/react';
import { Pagination as MuiPagination } from '@mui/material';
import { VFC } from 'react';
import { PAGINATION_THEME } from '../../utils/styles';

const Pagination: VFC<{
  count: number | undefined;
  page: number;
  onChangeFunc: (event: React.ChangeEvent<unknown>, index: number) => void;
}> = ({ count, page, onChangeFunc }) => (
  <div style={{ textAlign: 'center' }}>
    <ThemeProvider theme={PAGINATION_THEME}>
      <MuiPagination
        count={count}
        page={page}
        color="primary"
        size="large"
        onChange={onChangeFunc}
      />
    </ThemeProvider>
  </div>
);

export default Pagination;
