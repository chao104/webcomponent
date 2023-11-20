import { createApp } from 'vue'
import WcApp from './WcApp.vue'
import testCss from './test.scss';

export default class VueWcB extends HTMLElement {
  vInstance = null

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `<div id="app"></div>`
    const app = this.shadowRoot.querySelector('#app')
    this.vInstance = createApp(WcApp).mount(app)
    this.style = testCss // vue組件內style打包後會被隔離
  }

  bindProps(props) {
    if (this.vInstance && props) {
      const wcProps = this.vInstance._.props
      const propNames = Object.keys(props)
      propNames.forEach(name => {
        wcProps[name] = props[name]
      })
    }
  }

  bindEmits(emitList) {
    if (this.vInstance && emitList) {
      const emitsOptions = this.vInstance._.emitsOptions
      const emitNames = Object.keys(emitList)
      emitNames.forEach(name => {
        emitsOptions[name] = emitList[name]
      })
    }
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