# ポートフィリオサイト
### 概要
Next.jsとTailwind CSSを使ったポートフォリオサイト
未完成、デザインなど修正中

### デプロイ
URL: https://folio.paon.dev/

自宅サーバーを使ってデプロイ

### バージョン
- Node.js: 18
- Next.js: 13.5.6
- Tailwind CSS

### リポジトリのクローン
```bash
git clone https://github.com/katsuji3197/Portfolio-Next.git
```

### 環境変数

値はリポジトリに含めません。クローン後、サンプルをコピーしてローカル用の `.env` を作ります。

```bash
cp .env.example .env
```

`.env` を編集し、次のキーを設定してください。

| キー | 用途 | 取得方法 |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics の測定 ID。ページビュー計測に使います。`NEXT_PUBLIC_` のため、ブラウザに公開される識別子です。 | [Google アナリティクス](https://analytics.google.com/) の「管理」>「データストリーム」> 対象のウェブストリームに表示される測定 ID |

未設定の場合、計測タグの ID は空になり、アナリティクスへは送信されません。

### 起動方法
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
