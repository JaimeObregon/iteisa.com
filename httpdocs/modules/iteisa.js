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

const mark = document.querySelector('mark')
