# MySite

## 言語・フレームワーク

HTML5 + CSS3 + JavaScript

## ホスティング

Firebase Hosting

---

# デプロイ

1. Firebase cli のインストール(インストール済みの場合はスキップ)

```bash
npm install -g firebase-tools
```

2. Firebase にログイン

```bash
firebase login
```

3. `firebase.json`が存在するフォルダで以下コマンドを実行して Firebase Hosting にデプロイ

```
firebase deploy
```

---

# GitHub Action の設定

1. firebase cli でトークンの発行

```
firebase login:ci
```

2. トークンを GitHub の「Settings > Secrets and variables > Actions > New repository secret」をクリック

3. Name に「FIREBASE_TOKEN」、Secret に firebase cli で発行したトークンを入力
