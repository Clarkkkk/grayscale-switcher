# grayscale-switcher

A web extension to change website's grayscale

## Usage Notes

### Install

1. Go to [Release](https://github.com/Clarkkkk/grayscale-switcher/releases) page and download the zip file of latest version.
2. Unzip the file to a folder.
3. Open your browser and go to the extension page. For example, open [chrome://extensions/](chrome://extensions/) in Chrome, turn on "Develop mode", click "Load unpacked", and select the folder you just unzipped.

### Usage

Click the switch button to change the website's grayscale from 0 to 1 or from 1 to 0.

## Develop Notes

The extension manifest is defined in `src/manifest.js` and used by `@samrum/vite-plugin-web-extension` in the vite config.

Background, content scripts, options, and popup entry points exist in the `src/entries` directory. 

Content scripts are rendered by `src/entries/contentScript/renderContent.js` which renders content within a ShadowRoot
and handles style injection for HMR and build modes.

Otherwise, the project functions just like a regular Vite project.

To switch between Manifest V2 and Manifest V3 builds, use the MANIFEST_VERSION environment variable defined in `.env`

HMR during development is currently not supported in Manifest V3 (see [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension)).
Instead, when working with Manifest V3 builds, you can use watch mode.

Refer to [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension) for more usage notes.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

## Commands
### Build
#### Development, HMR

Hot Module Reloading is used to load changes inline without requiring extension rebuilds and extension/page reloads
```sh
npm run dev
```

#### Development, Watch

Rebuilds extension on file changes. Requires a reload of the extension (and page reload if using content scripts)
```sh
npm run watch
```

#### Production

Minifies and optimizes extension build
```sh
npm run build
```

### Load extension in browser

Loads the contents of the dist directory into the specified browser
```sh
npm run serve:chrome
```

```sh
npm run serve:firefox
```
