import * as browser from 'webextension-polyfill'
import './App.css';
import { useEffect } from 'react';
import { useOption } from '~/tools';

function App() {
  const [option] = useOption()

  useEffect(() => {
    const documents = [document, ...Array.from(document.querySelectorAll('iframe').values()).map((item) => item.contentDocument)]
    const cssPaths = import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS
    cssPaths.forEach((cssPath: string) => {
      documents.map((doc) => {
        if (doc) {
          const styleEl = doc.createElement('link');
          styleEl.setAttribute('rel', 'stylesheet');
          styleEl.setAttribute('href', browser.runtime.getURL(cssPath));
          doc.querySelector('head')?.appendChild(styleEl);
        }
      })
    })

    documents.forEach((doc) => {
      if (!doc) return

      const html = doc.querySelector('html')

      if (!html) return

      if (option.state === 'colored') {
        html.classList.add('colored')
      } else {
        html.classList.add('grayed')
      }

      document.querySelectorAll<HTMLElement>('body,html,body *').forEach((element) => {
        const style = getComputedStyle(element)
        if (style.filter.includes('grayscale') && option.state === 'colored') {
          element.style.filter = 'grayscale(0)'
        }
      })
    })

    return () => {
      documents.forEach((doc) => {
        if (!doc) return

        const html = doc.querySelector('html')

        if (!html) return
        html.classList.remove('colored')
        html.classList.remove('grayed')
      })
    }
  }, [option])

  return null
}

export default App;
