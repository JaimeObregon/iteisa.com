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
    component: 'x-welcome',
    description: 'Da la bienvenida al usuario al servidor.',
    hidden: true,
  },
  {
    href: '/iteisa',
    command: 'ITEISA',
    component: 'x-iteisa',
    description: 'Muestra información corporativa de ITEISA.',
  },
  {
    href: '/news',
    command: 'NEWS',
    component: 'x-news',
    description:
      'Presenta actualidad de la empresa y el blog, iniciado desde 2004.',
  },
  {
    href: '/products',
    command: 'PRODUCTS',
    component: 'x-products',
    description: 'Catálogo de productos de ITEISA.',
  },
  {
    href: '/files',
    command: 'FILES',
    component: 'x-files',
    description: 'Abre el repositorio de ficheros para descarga.',
  },
  {
    href: '/contact',
    command: 'CONTACT',
    component: 'x-contact',
    description: 'Cómo contactar con ITEISA.',
  },
  {
    href: '/legal',
    command: 'LEGAL',
    component: 'x-legal',
    description: 'Presenta el aviso legal de este servidor iteisa.com.',
  },
  {
    href: '/help',
    command: 'HELP',
    component: 'x-help',
    description: 'Carga esta pantalla de ayuda.',
  },
  {
    href: '/indy',
    command: 'INDY', // 🤫
    component: 'x-indy',
    description: 'Enhorabuena, ¡has encontrado un comando secreto!',
    hidden: true,
  },
]
