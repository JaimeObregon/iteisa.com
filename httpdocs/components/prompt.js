import { MyElement, html, css } from '../modules/element.js'
import './prompt.js'

class Prompt extends MyElement {
  static styles = css`
    @keyframes blink {
      0%,
      50% {
        background-color: var(--color);
      }
    }

    :host {
      display: block;
    }

    span {
      outline: none;
      caret-color: transparent;
    }

    mark {
      position: absolute;
      width: 1ch;
      height: 2ch;
      z-index: -1;
      background-color: transparent;
      animation: 1s blink infinite;
    }
  `

  static html = html`
    &gt;
    <span contenteditable spellcheck="false"></span>
    <mark></mark>
  `

  connectedCallback() {
    this.shadowRoot?.querySelector('span').focus()
  }
}

export { Prompt }

customElements.define('x-prompt', Prompt)
