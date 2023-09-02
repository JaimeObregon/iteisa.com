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
      white-space: pre;
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
    const span = this.shadowRoot.querySelector('span')

    document.addEventListener('keydown', ({ key }) => {
      span.focus()

      const command = span.innerText.trim().toUpperCase()

      if (key === 'Enter') {
        const event = new CustomEvent('command', {
          detail: { command },
          composed: true,
        })

        this.dispatchEvent(event)
      }
    })
  }
}

export { Prompt }

customElements.define('x-prompt', Prompt)
