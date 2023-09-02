import { MyElement, html, css } from './element.js'
import '../components/output.js'

class Command extends MyElement {
  static styles = css`
    ::selection {
      background: var(--color);
      color: black;
    }

    pre {
      margin: 0;
      font-family: inherit;
      white-space: pre-wrap;
    }

    a {
      background: var(--color);
      color: black;
    }

    a:hover {
      background: black;
      color: var(--color);
    }

    em {
      font-style: normal;
      background: repeating-linear-gradient(
          90deg,
          #28ea00 0,
          #28ea00 12px,
          transparent 0px,
          transparent 14px
        )
        0 100%/ 999ch 2px no-repeat;
    }

    kbd {
      font-family: inherit;
    }

    kbd:before {
      content: '<';
    }

    kbd:after {
      content: '>';
    }

    ol li {
      margin-left: 3ch;
    }

    ul,
    ol {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: '- ';
    }

    ul li {
      margin-left: 2ch;
    }

    h1 {
      font-size: inherit;
      margin: calc(2ch * 1) 0 0 0;
      padding: 0;
      font-weight: 900;
      /*text-align: center;*/
    }

    h1:before {
      content: '<<< ';
    }

    h1:after {
      content: ' >>>';
    }

    div {
      border: 2px dotted var(--color);
      margin: 0;
      padding: 1ch 2ch;
    }
  `

  static html = html``

  constructor() {
    super()
  }
}

export { Command, html, css }
