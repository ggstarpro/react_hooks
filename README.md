# 概要
- React Hooks 学習用REP
- 学習内容は[【完全保存版】React Hooksを完全に理解するHooksマスター講座【React18~19対応】](https://www.udemy.com/course/react-hooks-complete-course/)に準ずる
- [Github](https://github.com/Shin-sibainu/react-hooks-lessons)

# 環境構築
`$ git clone https://github.com/Shin-sibainu/react-hooks-lessons.git`
`$ npm install`
`$ npm run dev`


# 学習内容
## useState
### Lesson1_1
- 状態更新関数使用方法(stateの変更が即時反応されない理由)
- Strictモード
- VDOM
- onClickによる呼び出し型の違い

### Lesson1_2
- スプレット構文を使用したstateの状態を更新
- アンチパターン(ミュータブルとイミュータブル)

## useEffect
### Lesson2_1
- `useEffect`とクリーンアップ関数
### Lesson2_2
- 依存配列と無限ループ
### Lesson2_3
- カスタムフックと`useSWR`

## useRef
### Lesson3_1
- 概要
### Lesson3_2
- DOM操作
### Lesson3_３
- 再レンダリングを防ぐ
### Lesson3_4
- 別コンポーネントのDOMノードへアクセス (forwardRef)

## useContext
### Lesson4_1
- 認証プロパイダー

## useCallback・useMemo・React.memo
### Lesson5_1
- React.memo
### Lesson5_2
- useCallback
### Lesson5_3
- useMemo

## useOptimistic(React18ではCanary)
### Lesson6_1
- 楽観的UI更新 (useOptimisticは現在Canaryで別途インストールする必要があるがうまいくいかなかったReact19から使えるようになる想定)

## useTransition
### Lesson7_1
- UIノンブロッキングについて
### Lesson7_2
- useTransitionの使い方
### Lesson7_3
- Suspense

## useDeferredValue
### Lesson8_1
- 値を遅延
### Lesson8_2
- パフォーマンスチューニング

## useFormState・useFormStatus(React18ではCanary)
### Lesson_9
- プログレッシブエンハンスメント


# [SWR](https://swr.vercel.app/ja)
* `npm i swr`

# [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)
- Profilerでパフォーマンスがわかる
- Profilerの設定でHighlight updates when components renderにはチェック入れとく

# [react-canary-install]
```
以下をそのままターミナルにコピー＆ペーストしてください。

npm install react@18.3.0-canary-6db7f4209-20231021
npm install react-dom@18.3.0-canary-6db7f4209-20231021 --legacy-peer-deps
なお、--legacy-peer-depsは依存関係を解決しないまま半ば強制的にinstallするコマンドです。

本番環境で使用することは避けてください。useOptimisticはReact19のバージョンで安定版になった時に使用するしようにしましょう。
```

# Lesson9 環境構築
* npx create-next-app@latest
```
✔ What is your project named? … nextjs-hooks-tutorial
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
