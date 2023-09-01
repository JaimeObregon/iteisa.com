import { MyElement, html, css } from '../modules/element.js'

class Pointer extends MyElement {
  static styles = css`
    mark {
      position: absolute;
      width: 1ch;
      height: 2ch;
      z-index: -1;
      background-color: var(--color);
    }
  `

  static html = html`<mark></mark>`

  connectedCallback() {
    const mark = this.shadowRoot?.querySelector('mark')

    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event

      const foo = 28

      const left = Math.floor(clientX / 14) * 14 + 5
      const top = Math.floor(clientY / foo) * foo + 28 - 28 + 16

      // const rect = terminal.getBoundingClientRect()

      // const left = Math.floor((clientX + rect.x + 28) / 14)
      // const top = Math.floor((clientY + rect.y + 28) / 14)

      // console.log(top, left)

      // document.body.style.cursor = "none";

      mark.style.left = `${left}px`
      mark.style.top = `${top}px`
    })
  }
}

export { Pointer }

customElements.define('x-pointer', Pointer)
