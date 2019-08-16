const colors = require('./');

function tableRow(key, value){
  return `|  ${key} |  ![${value}](https://placehold.it/15/${value.replace('#', '')}/000000?text=+) |
  `
}

function header(title) {
  return `| ${title}  | Hex  |
  |---|---|
  `
}

function getTable(colors, name) {
  if (typeof colors[name] === 'string') return console.log(tableRow(name, colors[name]))
  const rows = Object.entries(colors[name]).reduce((table, color) => {
    return table + tableRow(...color)
  }, header(name))
  console.log(rows)
  console.log('\n')
}

Object.keys(colors).forEach((el) => {
  getTable(colors, el);
})

