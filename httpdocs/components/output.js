import { MyElement, html, css } from '../modules/element.js'

class Output extends MyElement {
  static styles = css`
    :host {
      display: block;
    }

    slot {
      white-space: pre-wrap;
    }
  `

  static html = html`<slot></slot>`

  connectedCallback() {
    console.log('output')
  }
}

export { Output }

customElements.define('x-output', Output)
