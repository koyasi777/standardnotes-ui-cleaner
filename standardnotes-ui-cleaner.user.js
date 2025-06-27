// ==UserScript==
// @name             Standard Notes UI Cleaner
// @name:ja          Standard Notes UI クリーナー
// @name:en          Standard Notes UI Cleaner
// @name:zh-CN       Standard Notes 界面清理器
// @name:zh-TW       Standard Notes 介面清理器
// @name:ko          Standard Notes UI 클리너
// @name:fr          Nettoyeur d'interface Standard Notes
// @name:es          Limpiador de interfaz de Standard Notes
// @name:de          Standard Notes UI-Reiniger
// @name:pt-BR       Limpador de UI do Standard Notes
// @name:ru          Очистка интерфейса Standard Notes
// @version          1.5.2
// @description      A userscript to hide premium prompts and other clutter from the Standard Notes web UI for free users.
// @description:ja   Standard NotesのWeb UIから、無料ユーザーには不要なプレミアム案内やボタンを非表示にして、すっきりとした画面に整えます。
// @description:zh-CN  一个用户脚本，用于隐藏 Standard Notes 网页界面中对免费用户无用的高级功能提示。
// @description:zh-TW  用於隱藏 Standard Notes 網頁介面中針對免費用戶的進階功能提示的使用者腳本。
// @description:ko     무료 사용자를 위해 Standard Notes 웹 UI에서 프리미엄 메시지와 기타 요소를 숨깁니다。
// @description:fr     Script utilisateur pour masquer les messages premium et autres éléments gênants dans l'interface web de Standard Notes pour les utilisateurs gratuits.
// @description:es     Script de usuario para ocultar mensajes premium y otros elementos en la interfaz web de Standard Notes para usuarios gratuitos.
// @description:de     Userscript zum Ausblenden von Premium-Hinweisen und anderen UI-Elementen für kostenlose Nutzer in Standard Notes.
// @description:pt-BR  Um userscript para ocultar avisos premium e outros elementos da interface web do Standard Notes para usuários gratuitos.
// @description:ru     Скрипт для скрытия премиум-уведомлений и лишних элементов интерфейса Standard Notes для бесплатных пользователей.
// @namespace        https://github.com/koyasi777/standardnotes-ui-cleaner
// @author           koyasi777
// @match            https://app.standardnotes.com/*
// @grant            none
// @run-at           document-idle
// @license          MIT
// @homepageURL      https://github.com/koyasi777/standardnotes-ui-cleaner
// @supportURL       https://github.com/koyasi777/standardnotes-ui-cleaner/issues
// @icon             https://app.standardnotes.com/favicon/favicon-32x32.png
// ==/UserScript==

(function() {
    'use strict';

    /**
     * Finds and hides the targeted UI elements based on user's request.
     * It uses specific, language-independent selectors and element properties to avoid accidentally hiding wrong elements.
     * Instead of removing elements, it sets their display style to 'none', which is safer for single-page applications.
     */
    function cleanupUI() {

        // --- 1. Hide "Unlock features" buttons ---
        try {
            const unlockButtons = Array.from(document.querySelectorAll('button'));
            unlockButtons.forEach(button => {
                if (button.textContent.trim() === 'Unlock features' || button.textContent.trim() === 'Upgrade Features') {
                     // Hide the parent container, or the button itself if it has no specific parent.
                    const parentToHide = button.closest('.grid.p-4') || button.parentElement;
                    if (parentToHide && parentToHide.style.display !== 'none') {
                        parentToHide.style.display = 'none';
                    }
                }
            });
        } catch (e) {
            console.error("SN Cleaner: Failed to hide 'Unlock/Upgrade features' button.", e);
        }


        // --- 2. Hide "Folders" label and "Files" view ---
        try {
            document.querySelectorAll('.section-title-bar-header .title').forEach(titleDiv => {
                const boldSpan = titleDiv.querySelector('span.font-bold');
                const label = titleDiv.querySelector('label');
                if (boldSpan && label && label.style.display !== 'none') {
                    label.style.display = 'none';
                }
            });

            const filesView = document.querySelector('#react-tag-files');
            if (filesView) {
                const buttonContainer = filesView.closest('button');
                if (buttonContainer && buttonContainer.style.display !== 'none') {
                    buttonContainer.style.display = 'none';
                }
            }
        } catch (e) {
            console.error("SN Cleaner: Failed to hide 'Folder/Files' elements.", e);
        }


        // --- 3. Hide "Change note type" button in the editor header ---
        try {
            const changeTypeButton = document.querySelector('button[aria-label*="(Ctrl+Shift+/)"]');
            if (changeTypeButton) {
                const parentDiv = changeTypeButton.parentElement;
                if (parentDiv && parentDiv.style.display !== 'none') {
                    parentDiv.style.display = 'none';
                }
            }
        } catch (e) {
            console.error("SN Cleaner: Failed to hide 'Change note type' button.", e);
        }

        // --- 4. Hide "Notes" button in the sort/filter popover menu ---
        // This logic is now handled by the more robust logic in section 5.

        // --- 5. In popovers, keep "Global" button and hide other preference targets (like tags) ---
        try {
            const prefHeader = Array.from(document.querySelectorAll('div.my-1.px-3'))
                .find(div => div.textContent.trim().includes('Preferences for'));

            if (prefHeader) {
                const buttonContainer = prefHeader.nextElementSibling;
                if (buttonContainer && buttonContainer.classList.contains('justify-between')) {
                    buttonContainer.querySelectorAll('button').forEach(button => {
                        // Hide any button that is not "Global" (e.g., tag buttons, "Reset" button).
                        if (button.textContent.trim() !== 'Global' && button.style.display !== 'none') {
                            button.style.display = 'none';
                        }
                    });
                }
            }
        } catch (e) {
            console.error("SN Cleaner: Failed to handle popover preference buttons.", e);
        }

        // --- 6. Hide "Create smart view" button ("スマートビューを作成") ---
        try {
            const plusIconPath = 'M13.6 8a.8.8 0 0 1-.8.8h-4v4a.8.8 0 1 1-1.6 0v-4h-4a.8.8 0 1 1 0-1.6h4v-4a.8.8 0 0 1 1.6 0v4h4a.8.8 0 0 1 .8.8Z';
            const plusIconSelector = `path[d="${plusIconPath}"]`;

            document.querySelectorAll('.section-title-bar-header').forEach(header => {
                const plusIcon = header.querySelector(plusIconSelector);
                if (plusIcon) {
                    const buttonToHide = plusIcon.closest('button');
                    if (buttonToHide && buttonToHide.style.display !== 'none') {
                        // 正規表現を使用して 'tag' または 'タグ' を含まないことを確認
                        const label = buttonToHide.getAttribute('aria-label') || '';
                        if (!/tag|タグ/i.test(label)) {
                            buttonToHide.style.display = 'none';
                        }
                    }
                }
            });
        } catch (e) {
            console.error("SN Cleaner: Failed to hide 'Create smart view' button.", e);
        }

    }

    // A MutationObserver re-runs the cleanup function whenever the page content changes.
    const observer = new MutationObserver(() => {
        cleanupUI();
    });

    // Start observing the entire document body for structural changes.
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Run once on initial load.
    cleanupUI();

})();
