import { Command, html, css } from '../modules/command.js'

class ContactCommand extends Command {
  static html = html`
    <x-output>
      <pre>
Para contactar con ITEISA por correo electrónico escribiendo a <b>info@iteisa.com</b>.</pre
      >
    </x-output>
  `

  connectedCallback() {}
}

export { ContactCommand }

customElements.define('x-contact-command', ContactCommand)
