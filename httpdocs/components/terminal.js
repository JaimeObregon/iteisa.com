import { MyElement, html, css } from '../modules/element.js'
import './prompt.js'

class Terminal extends MyElement {
  commands = []

  static styles = css`
    :host {
      position: relative;
      font-family: VT220, monospace;
      line-height: 100%;
      width: min(80ch, calc(100vw - 8ch));
      height: calc(100vh - 8ch);
      overflow: scroll;
      margin: auto;
      color: var(--color);
      text-shadow: 0 0 20px #1b5715e0, 0 0 5px #33d511ed, 0 0 2px #22662c;
      cursor: none;
    }
  `

  static html = html`
    <div>
      <slot></slot>
      <x-prompt></x-prompt>
    </div>
  `

  async run(string) {
    const command = this.commands.find(({ command }) => command === string)
    const { component, module } = command

    await import(`../commands/${module}`)

    this.innerHTML += html`<${component}></${component}>`
  }

  connectedCallback() {
    const sounds = {
      down: {
        enter: new Audio('/sounds/keys/press/enter.mp3'),
        space: new Audio('/sounds/keys/press/space.mp3'),
        backspace: new Audio('/sounds/keys/press/backspace.mp3'),
        generic: new Audio('/sounds/keys/press/generic.mp3'),
      },
      up: {
        enter: new Audio('/sounds/keys/release/enter.mp3'),
        space: new Audio('/sounds/keys/release/space.mp3'),
        backspace: new Audio('/sounds/keys/release/backspace.mp3'),
        generic: new Audio('/sounds/keys/release/generic.mp3'),
      },
    }

    document.addEventListener('keydown', (event) => {
      if (event.repeat) {
        return
      }

      const { key } = event

      if (key === 'Enter') {
        sounds.down.enter.play()
      } else if (key === 'Backspace') {
        sounds.down.backspace.play()
      } else if (key === ' ') {
        sounds.down.space.play()
      } else {
        sounds.down.generic.play()
      }
    })

    document.addEventListener('keyup', (event) => {
      const { key } = event

      if (key === 'Enter') {
        sounds.up.enter.play()
      } else if (key === 'Backspace') {
        sounds.up.backspace.play()
      } else if (key === ' ') {
        sounds.up.space.play()
      } else {
        sounds.up.generic.play()
      }
    })

    this.addEventListener('command', ({ detail }) => {
      const { string } = detail

      // TODO ‼️ XSS
      this.innerHTML += html`<x-output>&gt; ${string}</x-output>`

      const command = this.commands.find(({ command }) => command === string)

      if (command) {
        this.run(string)
      } else {
        this.innerHTML += html`<x-output
          >Comando o nombre de archivo incorrecto.</x-output
        >`
      }
    })

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

    const delay = 750

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
