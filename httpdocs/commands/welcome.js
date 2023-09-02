import { Command, html, css } from '../modules/command.js'
import { version } from '../modules/version.js'

class WelcomeCommand extends Command {
  static html = html`
    <x-output>
      <pre>
   _________________________
  /  _/_  __/ __/  _/ __/ _ |  Casa fundada en 2004 por Jaime Gómez-Obregón
 _/ /  / / / _/_/ /_\\ \\/ __ |  Versión <slot name="sha">e5a5135f</slot>, de <slot name="when">23 de agosto de 2023</slot>
/___/ /_/ /___/___/___/_/ |_|  19 años, 4 meses y 17 días en línea

<em>¡Bienvenido, 95.127.20.9!</em> Estás conectado al servidor iteisa.com.
Eres el visitante número 23.323 y el 69 de hoy.

ITEISA es un laboratorio de desarrollo de productos digitales. Tras dos décadas en el mercado de la consultoría tecnológica y los servicios en la nube, iniciamos una nueva etapa. Usa el comando <a>ITEISA</a> para saber más.

<div><em>AVISO:</em> En agosto de 2023 el negocio y la plataforma tecnológica de ITEISA han sido adquiridos por otra compañía. Más detalles con el comando <a href="/news">NEWS</a>.</div>
Toca o teclea un comando y pulsa <kbd>Enter</kbd>.
Usa el comando <a href="/help">HELP</a> en cualquier momento para obtener ayuda.
Comandos disponibles: <a href="/iteisa">ITEISA</a>, <a href="/news">NEWS</a>, <a href="/products">PRODUCTS</a>, <a href="/files">FILES</a>, <a href="/contact">CONTACT</a>, <a href="/legal">LEGAL</a>, <a href="/help">HELP</a>.</pre>
    </x-output>
  `

  connectedCallback() {
    const sha = this.shadowRoot.querySelector('slot[name=sha]')
    const when = this.shadowRoot.querySelector('slot[name=when]')

    const date = new Date(version.date)

    sha.outerHTML = html`<a
      href="https://github.com/iteisa/iteisa.com/commit/${version.commit}"
      >${version.commit.substring(0, 8)}</a
    >`

    when.outerHTML = new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Europe/Madrid',
    }).format(date)
  }
}

export { WelcomeCommand }

customElements.define('x-welcome-command', WelcomeCommand)
