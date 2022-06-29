FROM node:14.16
# lts
RUN mkdir /src
WORKDIR /src/pokemanage_front
RUN apt-get -y update \
    && apt-get install -y \
    git

# RUN yarn add typescript ts-node typesync
# yarn upgrade-interactive --latest
# → aで全選択
# yarn upgrade typescript@latest
RUN yarn install

# yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
# yarn add -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks
# yarn eslint --init

# yarn add -D prettier eslint-config-prettier

# yarn

# npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'
# No rules that are unnecessary or conflict with Prettier were found.
# になればESLintと衝突なし

# yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order

# yarn -D add eslint-plugin-prefer-arrow

# yarn add ky camelcase-keys react-helmet react-hook-form react-query react-router react-router-dom @material-ui/core react-select

# yarn add --dev @types/react-query // 型定義

# 6β版
# yarn add react-router@next react-rouer-dom@next history

# use Concurrent
# $ yarn add react@experimental react-dom@experimental

# yarn add @auth0/auth0-react