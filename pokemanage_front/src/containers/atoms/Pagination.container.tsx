import { VFC } from 'react';
import Pagination from '../../components/atoms/Pagination.component';

const EnhancedPagination: VFC<{
  count: number | undefined;
  page: number;
  onChangeFunc: (event: React.ChangeEvent<unknown>, index: number) => void;
}> = ({ count, page, onChangeFunc }) => (
  <Pagination count={count} page={page} onChangeFunc={onChangeFunc} />
);

export default EnhancedPagination;
