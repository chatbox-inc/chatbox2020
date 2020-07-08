# chatbox2020

## tailwindcssコーディング方法共通化 

基本的にはtailwindのクラスのみを使用する。    
position指定など、tailwindで実現しづらい場合のみコンポーネント内にcssを記述しても良い。

各セクションで使用されるボタンのような要素はコンポーネント化する。  
コンポーネントには役割に応じて先頭にprefixをつける。

### UI系の場合
UiButton.vue,
UiTitle.vue

### Layout系の場合

LHeader.vue,
LFooter.vue


## masterNetlify
https://chatbox2020.netlify.app/

## エラーが起きた時

```
eslintのエラーが起きた時 (赤文字で黒画面）
npm run lintfix:js 

```



## 各種資料

画面一覧表


コーディング規約

https://github.com/chatbox-inc/cobako_chatbox/blob/master/documents/%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E8%A6%8F%E7%B4%84.md

ページ一覧



## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

                                                                                                               

