import { useState, useEffect } from 'react';
import { appConsts } from '../utils/consts';
import { UserPoke } from '../utils/types';

// eslint-disable-next-line import/prefer-default-export
export const usePagination = (
  userPokes: UserPoke[],
): [
  number,
  number | undefined,
  UserPoke[],
  (event: React.ChangeEvent<unknown>, index: number) => void,
] => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>();
  const [allUserPokes, setAllUserPokes] = useState<UserPoke[]>([]);
  const [displayedUserPokes, setDisplayedUserPokes] = useState<UserPoke[]>([]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('list effect');
    setAllUserPokes(userPokes);
    // ページカウントの計算（6項目/ページ）
    setPageCount(Math.ceil(userPokes.length / appConsts.displayNum));
    // 表示データを抽出
    setDisplayedUserPokes(
      userPokes.slice(
        (page - 1) * appConsts.displayNum,
        page * appConsts.displayNum,
      ),
    );
  }, [page, userPokes]);

  const handleChange = (event: React.ChangeEvent<unknown>, index: number) => {
    // ページ移動時にページ番号を更新
    setPage(index);
    // ページ移動時に表示データを書き換える
    setDisplayedUserPokes(
      allUserPokes.slice(
        (index - 1) * appConsts.displayNum,
        index * appConsts.displayNum,
      ),
    );
  };

  return [page, pageCount, displayedUserPokes, handleChange];
};
