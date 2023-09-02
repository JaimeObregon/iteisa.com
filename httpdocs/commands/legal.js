import { Command, html, css } from '../modules/command.js'

class LegalCommand extends Command {
  static html = html`
    <x-output>
      <pre>
<h1>INFORMACIÓN LEGAL</h1>
ITEISA es una sociedad inscrita en el Registro Mercantil de Santander, en el Tomo 961, Folio 16, Sección 8, Hoja 20717, Inscripción 1ª, y con NIF: B39699830 y esta razón y domicilio social:

ITEISA DESARROLLO Y SISTEMAS, SL
Calle Luis Martínez, 21
39005 Santander (España)

Puedes contactarnos escribiendo a info@iteisa.com.

ITEISA es una marca registrada.

<h1>POLÍTICA DE <i>COOKIES</i> Y DE PRIVACIDAD</h1>
iteisa.com no utiliza <i>cookies</i>.
iteisa.com no recoge ni trata ningún dato personal.

<h1>PROPIEDAD INTELECTUAL</h1>
Tanto los contenidos como el código fuente de iteisa.com son copyright de
ITEISA y se distribuyen con licencias abiertas:

<ul>
<li>Salvo donde se indique lo contrario, los contenidos de este servidor tienen
licencia CC BY-SA 4.0. Esto significa que puedes redistribuirlos, adaptarlos,
remezclarlos y construir subre ellos en cualquier medio y formato, incluso con
fines comerciales, pero debes dar crédito a ITEISA como autor y distribuir la
obra derivada bajo esta misma licencia.</li>
<li>El código fuente se distribuye con licencia AGPL v3. Esto significa que puedes
acceder, modificarlo y redistribuirlo, incluso con fines comerciales, pero
debes licenciar como AGPL v3 y publicar el código fuente del proyecto completo
en el que incorpores esta reutilización, incluir este aviso de licencia y del
<i>copyright</i> de ITEISA y conceder derecho de uso sobre las patentes que
pudieras ostentar.</li>
</ul>
El código fuente y los contenidos de iteisa.com están disponibles en:
<a href="https://github.com/iteisa/iteisa.com">https://github.com/iteisa/iteisa.com</a>
</pre>
    </x-output>
  `

  connectedCallback() {}
}

export { LegalCommand }

customElements.define('x-legal-command', LegalCommand)
