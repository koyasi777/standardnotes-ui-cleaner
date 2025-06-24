# 🧹 Standard Notes UI Cleaner

## 📌 Overview

This userscript declutters the **Standard Notes (web)** interface by automatically hiding promotional UI elements aimed at premium users—such as “Unlock features” buttons, smart view creators, and unused sidebar sections—resulting in a cleaner, distraction-free workspace for free-tier users.

> 🆓 100% local, no tracking, no external API. Just a smoother UI experience for free users.

---

## ✨ Key Features

- 🔒 **Hides upgrade prompts** such as “Unlock features” buttons
- 🗂 **Removes unused navigation items** like “Folders” and “Files”
- 🧭 **Simplifies menus**, keeping only essential items like “Global”
- 📝 **Removes editor UI clutter**, e.g., the “Change note type” button
- ➕ **Hides smart view creation button** via SVG detection
- 🔁 **Auto-applies on UI changes** using a `MutationObserver`
- 🌙 Fully supports **dark mode**

> This script is actively maintained. Future updates may include additional UI cleanups based on user feedback and app changes.

---

## 🚀 Installation Guide

1. Install a userscript manager:
   - [Violentmonkey](https://violentmonkey.github.io/)
   - [Tampermonkey for Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. Install the userscript:
   👉 **[Click here to install](https://raw.githubusercontent.com/koyasi777/standardnotes-ui-cleaner/main/standardnotes-ui-cleaner.user.js)**
3. Visit `https://app.standardnotes.com/` — cleanup will activate automatically.

---

## 🔍 Cleanup Targets

| Target | Description |
|--------|-------------|
| **Unlock buttons** | Removes “Unlock features” prompts |
| **Folders label** | Hides sidebar section header |
| **Files view** | Removes via `#react-tag-files` reference |
| **Note type switcher** | Hides button via `aria-label` |
| **Menu items** | Filters popover, keeping only “Global” |
| **Smart view creator** | Hides plus button based on SVG path |

> ✅ Future targets (like banners, tooltips, or promotional notices) will be added as needed to keep the UI minimal.

---

## 🛡 Privacy & Safety

- 🔐 **Fully local** — No external APIs or network requests
- ✅ **Safe and reversible** — No elements are deleted, only hidden
- 🔄 **Resilient to UI changes** — Uses selectors and observer pattern

---

## 📝 Compatibility Notes

- ✅ Works on the Standard Notes web app: `https://app.standardnotes.com/`
- ❌ Does not affect mobile apps or official desktop apps
- ⚠️ May need updates if Standard Notes changes its DOM structure

---

## 🤝 Respect for Standard Notes

This script is designed for visual decluttering only. It **does not unlock or bypass any paid features**.

> 🙏 We respect and appreciate the value of Standard Notes' paid plans. If you find the app useful, consider [subscribing](https://standardnotes.com/plans) to support its continued development and mission.

---

## 🌍 Contribution

- 🧑‍💻 **MIT Licensed** — open source and free to use or modify
- 💬 Issues and PRs welcome via [GitHub Issues](https://github.com/koyasi777/standardnotes-ui-cleaner/issues)

🔗 [GitHub Repository](https://github.com/koyasi777/standardnotes-ui-cleaner)

---

## 💡 Why Use This?

> A cleaner, simpler interface helps you focus on what matters: your notes.  
> Ideal for free users who want a less cluttered, more minimal Standard Notes experience.
