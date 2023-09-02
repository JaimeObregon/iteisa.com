import { Command, html, css } from '../modules/command.js'

class HelpCommand extends Command {
  static html = html`
    <x-output>
      <pre>
<h1>COMANDOS DISPONIBLES</h1>
Para acceder a una sección, pulsa o teclea el comando correspondiente y pulsa <kbd>Enter</kbd>.

|---------|---------------------------------------------------------------------
| Comando | Descripción                                                        |
|---------|---------------------------------------------------------------------
<slot></slot>
|---------|---------------------------------------------------------------------

      </pre>
    </x-output>
  `

  connectedCallback() {
    const terminal = this.closest('x-terminal')
    const slot = this.shadowRoot?.querySelector('slot')

    const commands = terminal.commands
      .filter(({ hidden }) => !hidden)
      .map(
        ({ href, command, description }) =>
          html`| <a href="${href}">${command}</a> | ${description} |`
      )
      .join('<br/>')

    slot.outerHTML = commands
  }
}

export { HelpCommand }

customElements.define('x-help-command', HelpCommand)
