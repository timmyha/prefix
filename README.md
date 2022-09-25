# prefix

#### [live demo](https://prefix.vercel.app)

##### instructions

Click the settings icon to manage your bookmarks and various options. Begin typing
to access a shortcut, query a search engine, or navigate directly to a URL.

Your settings are stored in Local Storage, to move settings to another browser, copy the text in the JSON tab into the new browser.

##### how to use

-   use the [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) extension for Firefox.
-   or a [similar extension](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=en-GB) for Chrome.
-   in Safari, set `https://prefix.vercel.app` (or your own url) as your homepage, then set "new tabs open with" to `homepage`

##### local installation

`yarn`, `yarn dev`

##### notes

-   your theme's `backgroundImg` and a bookmark's `color` will accept anything the CSS `background` property will accept. Consult the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background) for more detailed information.
-   at the moment `accent` is only tied to the colors in the settings.
-   If you have Google selected as your search engine, you can still utilize DuckDuckGo's [bang]() functionality by prefacing your search query with a bang. See DuckDuckGo's page for more information.
-   if you set a bookmark's url to "localhost" ot "localhost:3000" (for legacy purposes) it will prompt for a port number.

##### short-term roadmap

-   replace or supplement JSON theme editor with a GUI.
-   bolster the themeability to add more variety to look and feel beyond colors.
-   create preset themes
-   add an optional database to persist settings between browsers/computers.

##### built with

ReactJs, Framer Motion, styled-components, IBM Plex, valtio
