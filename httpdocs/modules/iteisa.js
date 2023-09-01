import '../components/terminal.js'
import '../components/pointer.js'

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

const mark = document.querySelector('mark')

const sounds = {
  down: {
    enter: new Audio('/sounds/keys/press/enter.mp3'),
    space: new Audio('/sounds/keys/press/space.mp3'),
    backspace: new Audio('/sounds/keys/press/backspace.mp3'),
    generic: new Audio('/sounds/keys/press/generic.mp3'),
  },
  up: {
    enter: new Audio('/sounds/keys/release/enter.mp3'),
    space: new Audio('/sounds/keys/release/space.mp3'),
    backspace: new Audio('/sounds/keys/release/backspace.mp3'),
    generic: new Audio('/sounds/keys/release/generic.mp3'),
  },
}

document.addEventListener('keydown', (event) => {
  if (event.repeat) {
    return
  }

  const { key } = event

  if (key === 'Enter') {
    sounds.down.enter.play()
  } else if (key === 'Backspace') {
    sounds.down.backspace.play()
  } else if (key === ' ') {
    sounds.down.space.play()
  } else {
    sounds.down.generic.play()
  }
})

document.addEventListener('keyup', (event) => {
  const { key } = event

  if (key === 'Enter') {
    sounds.up.enter.play()
  } else if (key === 'Backspace') {
    sounds.up.backspace.play()
  } else if (key === ' ') {
    sounds.up.space.play()
  } else {
    sounds.up.generic.play()
  }
})
