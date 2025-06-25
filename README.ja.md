# 🧹 Standard Notes UI Cleaner

## 📌 概要

このユーザースクリプトは、**Standard Notes（Web版）** のインターフェースから、無料ユーザー向けに表示されるプロモーションUI（例：「Unlock features」ボタンやスマートビュー作成機能など）を自動的に非表示にし、よりシンプルで集中しやすい画面環境を提供します。

> 🆓 すべてローカルで動作。トラッキングや外部API通信は一切ありません。  
> 無料プラン利用時のUI体験をスムーズに整えます。

---

## ✨ 主な機能

- 🔒 「Unlock features」などのアップグレード案内を非表示
- 🗂 「Folders」や「Files」など、使用頻度の低いナビゲーション項目を非表示
- 🧭 メニューを簡素化（「Global」など必要最小限の項目のみ表示）
- 📝 エディター上部の「ノートタイプ変更」ボタンを非表示
- ➕ 「スマートビューを作成」ボタンをSVG経由で特定し非表示
- 🔁 `MutationObserver` を活用し、UI変更後も自動で再適用
- 🌙 ダークモードにも完全対応

> このスクリプトは継続的にメンテナンスされています。  
> ユーザーのフィードバックやUIの変更に応じて、今後さらに非表示対象が追加される可能性があります。

---

## 🚀 インストール方法

1. ユーザースクリプトマネージャーをインストール：
   - [Violentmonkey](https://violentmonkey.github.io/)
   - [Tampermonkey for Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. スクリプトをインストール：  
   👉 **[こちらをクリックしてインストール](https://raw.githubusercontent.com/koyasi777/standardnotes-ui-cleaner/main/standardnotes-ui-cleaner.user.js)**
3. `https://app.standardnotes.com/` にアクセスすれば、自動的にUIがクリーンアップされます。

---

## 🔍 非表示対象一覧

| 対象 | 説明 |
|------|------|
| **Unlockボタン** | 「Unlock features」などのアップグレード誘導 |
| **Foldersラベル** | サイドバー内のセクションタイトル |
| **Filesビュー** | `#react-tag-files` に基づいて非表示化 |
| **ノートタイプ切替ボタン** | `aria-label` をもとにエディター上部のボタンを非表示 |
| **メニュー項目** | フィルター内で「Global」以外を非表示 |
| **スマートビュー作成** | SVGパスをもとに「＋」ボタンを非表示化 |

> ✅ 今後、バナーやツールチップ、その他プロモーション的要素も対象に加える可能性があります。

---

## 🛡 プライバシーと安全性

- 🔐 **すべてローカルで完結** — 外部API通信なし
- ✅ **安全・可逆的** — 要素は削除せず、`display: none` で非表示に
- 🔄 **UI変化にも対応** — DOM変更を監視し、常に反映

---

## 📝 対応環境

- ✅ 対応：`https://app.standardnotes.com/` のWeb版
- ❌ 非対応：モバイルアプリ、公式デスクトップアプリ
- ⚠️ DOM構造が大幅に変更された場合、対応更新が必要になる可能性があります

---

## 🤝 Standard Notesへの敬意

本スクリプトは、あくまで**無料ユーザー向けの視覚的なUI整理**を目的としています。  
**有料プランの機能を解除・バイパスするものではありません。**

> 🙏 Standard Notesの有料プランには確かな価値があります。  
> 本アプリが気に入った場合は、ぜひ [サブスクリプション](https://standardnotes.com/plans) による支援をご検討ください。

---

## 🌍 貢献について

- 🧑‍💻 **MITライセンス** — 自由に利用・改変・再配布可能
- 💬 フィードバックやPRは [GitHub Issues](https://github.com/koyasi777/standardnotes-ui-cleaner/issues) へ

🔗 [GitHubリポジトリを見る](https://github.com/koyasi777/standardnotes-ui-cleaner)

---

## 💡 このスクリプトが役立つ人

> 無駄を省いたシンプルな画面で、ノートに集中したい方へ。  
> 無料プランでStandard Notesを最大限に活用したいすべてのユーザーに最適です。
