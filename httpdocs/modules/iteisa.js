import '../components/terminal.js'
import '../components/pointer.js'
import '../commands/welcome.js'

/*
const terminal = document.querySelector('x-terminal')
const html = terminal.innerHTML

// const contents = html.trim().replaceAll(/\s+/g, ' ')
const contents = html

terminal.innerHTML = ''

const startupDelay = 2000
const typeDelay = 10

let i = 0
let skip = false
let timeout

const loop = () => {
  if (contents[i] === undefined) {
    clearTimeout(timeout)
    return
  }

  if (!skip && contents[i] === '>') {
    skip = false
    i++
  } else if (contents[i] === '<') {
    skip = true
    i++
  }

  terminal.innerHTML = contents.slice(0, ++i)

  const milliseconds = skip ? 0 : typeDelay
  timeout = setTimeout(loop, milliseconds)
}

setTimeout(loop, startupDelay)
*/

const terminal = document.querySelector('x-terminal')

terminal.commands = [
  {
    href: '/',
    command: 'WELCOME',
    module: 'welcome.js',
    component: 'x-welcome-command',
    description: 'Da la bienvenida al usuario al servidor.',
    hidden: true,
  },
  {
    href: '/iteisa',
    command: 'ITEISA',
    module: 'iteisa.js',
    component: 'x-iteisa-command',
    description: 'Muestra información corporativa de ITEISA.',
  },
  {
    href: '/news',
    command: 'NEWS',
    module: 'news.js',
    component: 'x-news-command',
    description:
      'Presenta actualidad de la empresa y el blog, iniciado desde 2004.',
  },
  {
    href: '/products',
    command: 'PRODUCTS',
    module: 'products.js',
    component: 'x-products-command',
    description: 'Catálogo de productos de ITEISA.',
  },
  {
    href: '/files',
    command: 'FILES',
    module: 'files.js',
    component: 'x-files-command',
    description: 'Abre el repositorio de ficheros para descarga.',
  },
  {
    href: '/contact',
    command: 'CONTACT',
    module: 'contact.js',
    component: 'x-contact-command',
    description: 'Cómo contactar con ITEISA.',
  },
  {
    href: '/legal',
    command: 'LEGAL',
    module: 'legal.js',
    component: 'x-legal-command',
    description: 'Presenta el aviso legal de este servidor iteisa.com.',
  },
  {
    href: '/help',
    command: 'HELP',
    module: 'help.js',
    component: 'x-help-command',
    description: 'Carga esta pantalla de ayuda.',
  },
  {
    href: '/indy',
    command: 'INDY', // 🤫
    module: 'indy.js',
    component: 'x-indy-command',
    description: 'Enhorabuena, ¡has encontrado un comando secreto!',
    hidden: true,
  },
]

terminal.run('WELCOME')
