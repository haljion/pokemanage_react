# pokemanage_react

```
tree
```

## 使用技術
- フロント：React.js 
    - react rooter
    - 
- バックエンド：Python(Django) 
- DB：PostgreSQL
- その他環境： 
    - Docker
    - bootstrap
    - BeautifulSoup4

## 機能
- 育成済み個体管理機能
    - ブログ等用画像生成
- ログイン機能
- チェックリスト機能
    - 夢特性
    - オシャボ
    - 図鑑
    - csv吐き出し


## 開発環境構築
```
docker-compose up
```

### Reactセットアップ
reactコンテナ内で作業する
```
docker container exec -it react bash
```

```
yarn install
```

起動
```
cd pokemanage_front
yarn start
```

appConsts.dropdown.itemNon
appConsts.dropdown.wazaNon
の値が適切か確認する