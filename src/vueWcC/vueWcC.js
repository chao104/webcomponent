import testCss from './test.scss';

export default class VueWcC extends HTMLElement {
  vInstance = null

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `<div id="app">test dynamic import</div>`
    this.style = testCss // vue組件內style打包後會被隔離
  }

  get style() {
    return [...this.shadowRoot.adoptedStyleSheets]
  }

  set style(css) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css)
    this.shadowRoot.adoptedStyleSheets.push(sheet)
  }
}