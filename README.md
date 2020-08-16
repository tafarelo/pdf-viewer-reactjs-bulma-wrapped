# pdf-viewer-reactjs-styled

This package is a wrapper for [ansu5555/pdf-viewer-reactjs](https://github.com/ansu5555/pdf-viewer-reactjs)

Encapsulated bulma with a prefixed style and re-exported the library.

That way those using bootstrap etc. can use the project without worrying about style conflicts.




If you do not have any problems with adding bulma to your project, don't bother using this package and go with the original package.

Refer to the original package, [ansu5555/pdf-viewer-reactjs](https://github.com/ansu5555/pdf-viewer-reactjs) for docs.




Install it via `npm install pdf-viewer-reactjs-bulma-wrapped` or `yarn add pdf-viewer-reactjs-bulma-wrapped`

Make sure to import the css file in this module as follows
```
/* index.js / App.js / or some other file */
import 'pdf-viewer-reactjs-bulma-wrapped/css/main.css';
```

Then, you can use PdfViewer without worrying about bulma.
```
import PDFViewer from 'pdf-viewer-reactjs-bulma-wrapped';
```






Used bulma-starter as the base.

<a href="http://bulma.io"><img src="https://raw.githubusercontent.com/jgthms/bulma-start/master/bulma-start.png" alt="Bulma: a Flexbox CSS framework" style="max-width:100%;" width="600" height="315"></a>
