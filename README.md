# AI Tools Affiliate Blog

SEO最適化されたAIツールのアフィリエイトブログサイトです。

## セットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```
http://localhost:3000 でアクセス可能

### 3. ビルド
```bash
npm run build
npm start
```

## アフィリエイトリンクの設定

`components/AffiliateLink.tsx`の`trackingId`を自分のアフィリエイトIDに変更：

```typescript
trackingId = "your-affiliate-id"
```

## 新しい記事の追加

1. `posts/`フォルダに新しい`.md`ファイルを作成
2. 以下のフロントマターを追加：

```markdown
---
title: "記事タイトル"
date: "2024-01-25"
category: "AI Writing"
excerpt: "記事の要約"
author: "著者名"
tags: ["タグ1", "タグ2"]
---

記事の内容...
```

## デプロイ

### Vercelへのデプロイ（推奨）

1. GitHubにリポジトリをプッシュ
2. Vercelでプロジェクトをインポート
3. 自動デプロイ設定

### 環境変数

本番環境では以下を設定：
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Google Analytics ID
- `NEXT_PUBLIC_SITE_URL` - サイトのURL

## 収益化のヒント

1. **高単価商品に注力**
   - AI企業ツール（月額$50以上）
   - 年間プラン（コミッション率が高い）

2. **コンテンツ戦略**
   - 比較記事（conversion率が高い）
   - チュートリアル記事（SEO効果大）
   - レビュー記事（信頼性構築）

3. **SEO対策**
   - ロングテールキーワード狙い
   - 定期的な更新
   - 内部リンクの最適化