import { Command, html, css } from '../modules/command.js'

class WelcomeCommand extends Command {
  static html = html`
    <x-output>
      <pre>
   _________________________
  /  _/_  __/ __/  _/ __/ _ |  Casa fundada en 2004 por Jaime Gómez-Obregón
 _/ /  / / / _/_/ /_\\ \\/ __ |  19 años, 4 meses y 17 días en línea
/___/ /_/ /___/___/___/_/ |_|  Versión <a>e5a5135f</a> (23 de agosto)

<em>¡Bienvenido, 95.127.20.9!</em> Estás conectado al servidor iteisa.com.
Eres el visitante número 23.323 y el 69 de hoy.

ITEISA es un laboratorio de desarrollo de productos digitales. Tras dos décadas en el mercado de la consultoría tecnológica y los servicios en la nube, iniciamos una nueva etapa. Usa el comando <a>ITEISA</a> para saber más.

<em>AVISO:</em> Con fecha 17 de agosto de 2023 el negocio y la plataforma tecnológica de ITEISA han sido adquiridos por otra compañía. Para conocer los detalles utiliza el comando <a>NEWS</a>.

Comandos disponibles: <a>ITEISA</a>, <a>NEWS</a>, <a>PRODUCTS</a>, <a>FILES</a>, <a>CONTACT</a>, <a>LEGAL</a>, <a>HELP</a>.

Pulsa o teclea un comando y pulsa <kbd>Enter</kbd>. Usa el comando <a>HELP</a> en cualquier momento para obtener ayuda.
      </pre>
    </x-output>
  `

  connectedCallback() {
    // this.innerHTML = html``
  }
}

export { WelcomeCommand }

customElements.define('x-welcome-command', WelcomeCommand)
