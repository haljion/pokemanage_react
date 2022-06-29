import { createTheme } from '@mui/material';

// mui-Pagination: 中央寄せ
// eslint-disable-next-line import/prefer-default-export
export const PAGINATION_THEME = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          display: 'inline-block',
        },
      },
    },
  },
});
