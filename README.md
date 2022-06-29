# pokemanage_react

```
.
├── README.md
├── docker-compose.yml
└── src
    ├── django
    │   ├── Dockerfile
    │   ├── requirements.txt
    │   └── pokemanage_api
    └── react
        ├── Dockerfile
        └── pokemanage_front
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

## API

※token free  
→headerに key: Authorization, value: JWT [access token] が必要かどうか

| url |  | method | api | param | return | token free |
| - | - | - | - | - | - | - |
| /api | - | - | 自作API |  | - | - |
|  | /create | POST | ユーザー作成 | username, password | id,username | ○ |
|  | /loginuser | GET, POST | ログインユーザー情報 |  | - | × |
|  | /pokemons | GET | ポケモン一覧 | - | - | × |
|  | /pokemon/<int:pk> | GET | ポケモン情報(単体) | - | - | × |
|  | /items | GET | アイテム一覧 | - | - | × |
|  | /balls | GET | ボール一覧 | - | - | × |
|  | /personalities | GET | 性格一覧 | - | - | × |
|  | /wazas | GET | わざ一覧 | - | - | × |
|  | /userpoke | GET, POST, PUT, DELETE | 育成個体情報(一覧、検索、登録、更新、削除) |  |  | × |
| /admin | - | - | Django管理サイト | - | - | - |
