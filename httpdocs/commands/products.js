import { Command, html, css } from '../modules/command.js'

class ProductsCommand extends Command {
  static html = html`
    <x-output>
      <pre>
.------------------------------------------------.
| Estamos trabajando en nuestro primer producto. |
| En cuanto esté listo, aparecerá aquí.          |
·------------------------------------------------·
(\\__/) ||
(•ㅅ•) ||
/    づ
</pre
      >
    </x-output>
  `

  connectedCallback() {}
}

export { ProductsCommand }

customElements.define('x-products-command', ProductsCommand)
