import { MyElement, html, css } from '../modules/element.js'
import './prompt.js'

class Terminal extends MyElement {
  static styles = css``

  static html = html`
    <div>
      <slot></slot>
      <x-prompt></x-prompt>
    </div>
  `

  connectedCallback() {
    const delay = 750

    // 🙂 https://en.wikipedia.org/wiki/Konami_Code
    const combo = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ]

    let timeout
    let buffer = []

    document.addEventListener('keyup', ({ key }) => {
      clearTimeout(timeout)

      buffer.push(key)

      let valid = true

      buffer.forEach((key, i) => {
        if (combo[i] !== key) {
          valid = false
        }
      })

      if (combo.length === buffer.length && valid) {
        const chiptune = new Audio('/sounds/chiptune.mp3')
        chiptune.play()
      }

      timeout = setTimeout(() => (buffer = []), delay)
    })
  }
}

export { Terminal }

customElements.define('x-terminal', Terminal)
