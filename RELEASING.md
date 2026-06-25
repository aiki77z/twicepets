# Releasing

## Windows

Run this on Windows:

```powershell
npm run dist:win
```

Outputs:

- `dist/TWICE-Pets-win11-Setup-1.0.0.exe`
- `dist/TWICE-Pets-win11-1.0.0.exe`

## macOS

Electron Builder only builds macOS `.dmg` and `.zip` artifacts on macOS.

Use the included GitHub Actions workflow:

1. Go to GitHub -> Actions -> build-mac.
2. Click Run workflow.
3. Download `TWICE-Pets-mac-arm64` and `TWICE-Pets-mac-x64`.

For a release, push a tag such as `v1.0.0`. The workflow uploads both Apple Silicon and Intel artifacts and attaches them to the GitHub Release.

The macOS app is unsigned unless Apple Developer signing and notarization are added later.
