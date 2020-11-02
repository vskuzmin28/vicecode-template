const readline = require('readline')
const fs = require('fs')
const { stringify } = require('querystring')

const qrl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ws = fs.createWriteStream(__dirname + '/config.js', { flags: 'r+', defaultEncoding: 'utf8' })

const rl = readline.createInterface({
  input: fs.createReadStream(__dirname + '/config.js'),
})

qrl.question('What do you think of Node.js? ', (answer) => {

  console.log(`Thank you for your valuable feedback: ${answer}`)

  console.log(answer)
  qrl.close()

})

const getAnswer = qrl('111')
console.log(getAnswer)

// rl.on('line', (line) => {

//   if (line.match(/444/)) {
//     line = line.replace(/444/, qrl.question(answer));
//   }

//   ws.write(line + '\n' + '\n' + 'module.exports = {website}')

//   rl.close()
// })