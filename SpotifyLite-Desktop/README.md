# TRD PLAYER

A lightweight Windows desktop companion with a minimal dark UI. Search is routed to Spotify's official web app, and playback uses Spotify's official embedded player.

## Features

- Electron desktop app for Windows
- Minimal dark theme with green accent
- Spotify search in browser
- Embed track, album, playlist, show or episode
- NSIS installer with desktop and Start Menu shortcuts
- GitHub Actions workflow builds a Windows installer artifact

## Run from source

Install Node.js (LTS), then in this directory:

```bash
npm install
npm start
```

## Build the Windows installer

```bash
npm install
npm run dist
```

The installer will be generated in `dist/` as `Spotify-Lite-Setup-1.0.0.exe`.

## Build using GitHub Actions

Push this repository to GitHub. Open the **Actions** tab and run the workflow **Build Windows Installer**. Download the `.exe` from the workflow run's Artifacts section.

## Disclaimer

Unofficial community project, not affiliated with or endorsed by Spotify AB. Spotify names and marks belong to their respective owners. Playback, embeds, and account availability are controlled by Spotify.
