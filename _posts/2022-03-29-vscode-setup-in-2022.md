---
layout: post
title: VSCode Setup in 2022
description: In this tutorial I will show you how to set up VSCode like my personal preferences.
tags: vscode
comments: true
---

## Reset to defaults

1. Hit `Cmd` + `Shift` + `P`
2. Search for **open settings json** and select Preferences: Open Settings (JSON)
3. Delete everything inside the document, but leave an empty `{ }` and save the file
4. Relaunch VSCode
5. Delete the contents of /Users/eriktailor/.vscode/extensions folder

---

## Extensions

-   [Edit Csv](https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv)
-   [vscode-icons-mac](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-icons-mac)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [SVG Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)
-   [Highlight matching tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
-   [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
-   [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

---

## Auto format on save

1. Reset all to default settings
2. Delete all extensions _(need a clear vscode)_
3. Enable Settings > Formatting > Format on save
4. In a html file, double click and select Format document
5. Select **Prettier** as a default html formatter

---

## Settings

`Cmd` + `Shift` + `P` and search for **settings.json** and add these lines:

```javascript
{
    "editor.formatOnSave": true,
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.lineHeight": 26,
    "breadcrumbs.enabled": false,
    "editor.renderWhitespace": "none",
    "editor.renderControlCharacters": false,
    "workbench.statusBar.visible": false,
    "workbench.iconTheme": "vscode-icons-mac",
    "workbench.colorCustomizations": {
        "minimap.errorHighlight": "#1E1E1E",
		 "gitDecoration.ignoredResourceForeground": "#fff"
    },
    "git.decorations.enabled": false,
    "window.nativeTabs": true,
    "problems.decorations.enabled": false,
    "editor.minimap.size": "fill",
    "editor.minimap.maxColumn": 100,
    "editor.minimap.scale": 2,
    "editorOverviewRuler.background": "#fff",
    "editor.minimap.enabled": false,
    "terminal.external.osxExec": "iTerm.app",
    "terminal.integrated.defaultProfile.osx": "zsh",
    "terminal.integrated.fontFamily": "monospace",
    "files.exclude": {
        "**/.git": false
    }
}
```
