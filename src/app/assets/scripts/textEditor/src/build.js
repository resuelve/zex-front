const fs = require('fs')
const { promisify } = require('Util')
const readFileAsync = promisify(fs.readFile)

const scripts = [
  'marked',
  'codemirror',
  'overlay',
  'xml',
  'meta',
  'markdown',
  'gfm'
]
const styles = [
  'cobalt',
  'codemirror'
]
const scriptProm = scripts.map(script => {
  return readFileAsync(`./${script}.js`, {encoding: 'utf8'})
})
const styleProm = styles.map(style => {
  return readFileAsync(`./${style}.css`, { encoding: 'utf8' })
})

Promise.all(scriptProm).then(res => {
  fs.writeFileSync('../textEditor.js', res.join(';'))
})
Promise.all(styleProm).then(res => {
  fs.writeFileSync('../textEditor.css', res.join(';'))
})
