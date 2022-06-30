// eslint-disable-next-line import/prefer-default-export
export const appConsts = {
  url: {
    root: '/',
    new: '/userpoke/new',
    edit: '/userpoke/edit',
  },
  page: {
    top: 'PokeManage TOP',
    topHeader: 'PokeManage とは',
    list: '育成ポケモン一覧',
    new: '育成ポケモン登録',
    edit: '育成ポケモン編集',
  },
  param: {
    status: {
      H: 9,
      A: 0,
      B: 1,
      C: 2,
      D: 4,
      S: 5,
    },
    personality: {
      status: { default: 0, up: 1, down: 2 },
      rate: { default: 0, up: 1.1, down: 0.9 },
    },
    ability: {
      '1': '1',
      '2': '2',
      hidden: '3',
    },
    gender: {
      none: '0',
      male: '1',
      female: '2',
      flag: { true: 0, false: 1 },
    },
    color: { default: 0, strange: 1 },
  },
  dropdown: { wazaNon: 644, itemNon: 163, ballMonster: 19 },
  // ページネーション: 各ページ表示数
  displayNum: 6,
  errorMessage: {
    ability: '特性を選択してください！',
    waza: 'わざが重複しています！',
    effortValue: '努力値の合計は 510 以内です！',
  },
};
