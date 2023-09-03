import { Command, html, css } from '../modules/command.js'

class FilesCommand extends Command {
  static html = html`
    <x-output>
      <pre>
      <h1>Repositorio de ficheros</h1>

      total 1
      -rw-r--r--   1 jaime  iteisa   14K 25 ago 00:13 <b style="background: #28ea00; color: black">logo.png</b>
      <!-- Actualmente no hay ningún fichero en el repositorio. -->
      Pulsa o teclea el nombre del fichero para descargarlo.
      Teclea <b style="background: #28ea00; color: black">BACK</b> para volver al menú principal.</pre>
    </x-output>
  `

  connectedCallback() {}
}

export { FilesCommand }

customElements.define('x-files-command', FilesCommand)
